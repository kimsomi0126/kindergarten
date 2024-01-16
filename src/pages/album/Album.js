import React, { useEffect, useRef, useState } from "react";
import ContentLayout from "../../layouts/common/ContentLayout";
import {
  AlbumTopBar,
  AlbumWrap,
  InnerAlbum,
  SearchBar,
} from "../../styles/album/album";
import { GreenBtn } from "../../styles/ui/buttons";
// 임시 데이터 서버로부터 받아온 데이터로 대체될 예정
const data = [
  {
    id: 1,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 2,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 3,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 4,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 5,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 6,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 7,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 8,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 9,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 10,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 11,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 12,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 13,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 14,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 15,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 16,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 17,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 18,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 19,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 20,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 21,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 22,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 23,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 24,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 25,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 26,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 27,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 28,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 29,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 30,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 31,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 32,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 33,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 34,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 35,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 36,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 37,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 38,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 39,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 40,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 51,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 52,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 53,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 54,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 55,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 56,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 57,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 58,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 59,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 60,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 61,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 62,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 63,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 64,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 65,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 66,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 67,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 68,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 69,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 70,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 71,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 72,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 73,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 74,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 75,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 76,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 77,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 78,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 79,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 80,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 81,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 82,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 83,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 84,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 85,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 86,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 87,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 88,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 89,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 90,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 1,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 2,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 3,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 4,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 5,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 6,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 7,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 8,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 9,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 10,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 11,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 12,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 13,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 14,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 15,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 16,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 17,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 18,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 19,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 20,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 21,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 22,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 23,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 24,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 25,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 26,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 27,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 28,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 29,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 30,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 31,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 32,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 33,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 34,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 35,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 36,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 37,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 38,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 39,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 40,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 51,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 52,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 53,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 54,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 55,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 56,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 57,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 58,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 59,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 60,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 61,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 62,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 63,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 64,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 65,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 66,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 67,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 68,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 69,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 70,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 71,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 72,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 73,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 74,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 75,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 76,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 77,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 78,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 79,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 80,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 81,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 82,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 83,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 84,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 85,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 86,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 87,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 88,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 89,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 90,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 1,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 2,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 3,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 4,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 5,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 6,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 7,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 8,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 9,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 10,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 11,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 12,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 13,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 14,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 15,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 16,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 17,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 18,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 19,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 20,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 21,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 22,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 23,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 24,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 25,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 26,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 27,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 28,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 29,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 30,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 31,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 32,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 33,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 34,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 35,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 36,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 37,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 38,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 39,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 40,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 51,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 52,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 53,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 54,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 55,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 56,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 57,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 58,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 59,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 60,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 61,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 62,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 63,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 64,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 65,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 66,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 67,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 68,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 69,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 70,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 71,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 72,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 73,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 74,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 75,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 76,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 77,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 78,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 79,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 80,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 81,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 82,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 83,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 84,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 85,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 86,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 87,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 88,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 89,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 90,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 1,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 2,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 3,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 4,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 5,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 6,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 7,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 8,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 9,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 10,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 11,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 12,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 13,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 14,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 15,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 16,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 17,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 18,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 19,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 20,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 21,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 22,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 23,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 24,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 25,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 26,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 27,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 28,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 29,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 30,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 31,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 32,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 33,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 34,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 35,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 36,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 37,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 38,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 39,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 40,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 51,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 52,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 53,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 54,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 55,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 56,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 57,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 58,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 59,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 60,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 61,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 62,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 63,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 64,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 65,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 66,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 67,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 68,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 69,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 70,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 71,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 72,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 73,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 74,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 75,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 76,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 77,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 78,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 79,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 80,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
  {
    id: 81,
    title: "소풍",
    album:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 82,
    title: "여름 바닷가",
    album:
      "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
  },
  {
    id: 83,
    title: "마피아놀이",
    album:
      "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
  },
  {
    id: 84,
    title: "교육활동",
    album:
      "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
  },
  {
    id: 85,
    title: "내가 모델이라면",
    album:
      "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
  },
  {
    id: 86,
    title: "라쿠카라차",
    album:
      "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
  },
  {
    id: 87,
    title: "아침 병동",
    album:
      "https://i.namu.wiki/i/RQ1m6O1nlbreiM7WX1ajVJFPgZJXlnjIDpVhgSz9GvNlR2hBvzeBpRHceH5D8EeBOvFokBhSoNXEG3ymf9qe1TD8K3fGhiWWb1rM0mZtB9Esoqixg4n2ucmvs38-H4ZgJOPGCiM5H9dfr6WeG58GHw.webp",
  },
  {
    id: 88,
    title: "달콤한 집",
    album:
      "https://i.namu.wiki/i/htEEAdaqlZEhYoiooixQNMC7jE7KAKlBuakPRkrvk6rwWvKDH7pNiCJ95sOD0fqBXqfzcVwsmx67-f2wd8r-14zlNYKNKMGFyFziypwOUXO3j9yuBzmNpZH0y2HmtY1Aka99q4PSDBCfvwowsrJMVw.webp",
  },
  {
    id: 89,
    title: "지옥가는 솔로",
    album:
      "https://i.namu.wiki/i/hC0C8E08qgDyIeFU_Zfe6aKEG010mSoD-qDZswZV2ExJ3Ku57D6VckQyJzRpNlpkeiqmv7zBEhALtp29Lxdx8_VyUftYyggDJOd4OuyxkHbt8bBmUru_aOL1m7wbGkVBRynJ_Z_Tj4vRTYIQ2b0A4w.webp",
  },
  {
    id: 90,
    title: "원피스 찾아보기",
    album:
      "https://i.namu.wiki/i/Nn4jd54NlnJ6LTTAK_5g22L5hUkkjVxD0KuwyOxOnefSvHR-GqjFEYYHxUG9IM3tHJp1kopAPgcuy3wqr3enl93gy_XZPVYIPfFHTknU1nhXIJjTcZdTVhzhoPpIb48rajvzXnu20hQvN7y5pLPKzA.webp",
  },
];

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const loader = useRef(null);

useEffect(() => {
  let options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  // Intersection Observer를 생성합니다.
  const observer = new IntersectionObserver(handleObserver, options);
  if (loader.current) {
    observer.observe(loader.current);
  }

  // 컴포넌트가 언마운트될 때 옵저버를 해제합니다.
  return () => {
    observer.disconnect();
  };
}, []);

// Intersection Observer 콜백
const handleObserver = entities => {
  const target = entities[0];
  if (target.isIntersecting) {
    setLoading(true);

    setItems(data);

    // 로딩 상태를 false로 설정합니다.
    setLoading(false);
  }
};

// 로드할 아이템 목록을 렌더링합니다.
const renderItems = () => {
  return items.map((item, index) => <div key={index}>{item}</div>);
};

const Album = () => {
  return (
    <ContentLayout>
      <AlbumWrap paddingTop={100}>
        {/* 메인 콘텐츠 상단 바 컴포넌트 */}
        <AlbumTopBar>
          <div className="album-title">
            <img
              src={process.env.PUBLIC_URL + "/images/common/titleIcon.svg"}
            ></img>
            <h3>활동앨범</h3>
          </div>

          <SearchBar>
            <input type="text" placeholder="제목을 입력하세요." />
            <img
              src={process.env.PUBLIC_URL + "/images/common/readingGlasses.svg"}
            ></img>
            <GreenBtn>글쓰기</GreenBtn>
          </SearchBar>
        </AlbumTopBar>
        <InnerAlbum width={47} height={39}>
          <div data={data} className="gallery">
            {renderItems()}
            <div className="gallery-item" ref={loader}>
              {loading && <p>Loading more items...</p>}
            </div>
          </div>
        </InnerAlbum>

        {/* 갤러리 아이템 컴포넌트 */}
        {/* <MainGallery activities={activities} /> */}
      </AlbumWrap>
    </ContentLayout>
  );
};

export default Album;
