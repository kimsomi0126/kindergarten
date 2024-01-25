import Search from "antd/es/input/Search";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AlbumData } from "../../components/common/TemporaryData";
import Loading from "../../components/loading/Loading";
import { UserTopRight } from "../../styles/adminstyle/guardianlist";
import {
  AlbumList,
  AlbumTopBar,
  AlbumWrap,
  SearchBar,
} from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";

// 화면 출력 상태 정보
const initState = { ialbum: 0, albumTitle: "string", albumPic: "string" };
// const host = `${API_SERVER_HOST}/api/album/listall`;

const ReadAllAlbum = ({ id }) => {
  const [items, setItems] = useState(AlbumData[0]); // 이미지 데이터 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const navigate = useNavigate(); // 'useNavigate' hook을 사용하여 페이지 이동 처리
  const loaderRef = useRef(null);

  const loadImages = async () => {
    if (loading || !hasMore) return; // 이미 로딩중이거나 더 이상 불러올 데이터가 없으면 실행 중단

    setLoading(true); // 로딩 시작

    try {
      const response = await AlbumData[1]; //fetch(`host/?ialbum=${items.length / pno + 1}`);
      const data = await AlbumData[0];
      // 새 이미지 데이터 추가
      setItems(prevItems => [...prevItems, ...data]);

      if (data.length === 0 || data.length < 10) {
        // 더 이상 불러올 데이터가 없거나 마지막 페이지일 경우
        setHasMore(false); // 더 불러올 데이터가 없음으로 설정
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  // Intersection Observer Callback
  const handleObserver = entities => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      loadImages(); // 추가 이미지 로드
    }
  };

  // Observer 설정
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, observerOptions);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 observer 해제
  }, [hasMore]);

  // 컴포넌트 마운트 시 초기 이미지 로드
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <AlbumWrap paddingTop={40} width={100} height={100}>
      {/* 메인 콘텐츠 상단 바 컴포넌트 */}
      <AlbumTopBar>
        <PageTitle>활동앨범</PageTitle>
        <SearchBar>
          <UserTopRight>
            <Search
              placeholder="제목을 입력하세요."
              style={{
                width: 300,
              }}
              size={"large"}
              allowClear
              onSearch={value => console.log(value)}
            />
            <GreenBtn onClick={e => navigate("write")}>글쓰기</GreenBtn>
          </UserTopRight>
        </SearchBar>
      </AlbumTopBar>
      <AlbumList>
        {items.map(item => (
          <Link key={item.ialbum} to={`details/${item.ialbum}`}>
            <ul className="image-grid">
              <li className="image-item">
                <img src={item.albumPic} alt={item.albumTitle} />
              </li>
              <p>{item.albumTitle}</p>
            </ul>
          </Link>
        ))}
        {loading && <Loading className="loading" />}
        <div ref={loaderRef} /> {/* 'loading' ref를 이 div에 할당 */}
      </AlbumList>
    </AlbumWrap>
  );
};

export default ReadAllAlbum;
