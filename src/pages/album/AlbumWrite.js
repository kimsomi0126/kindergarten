import WriteAlbum from "../../components/album/WriteAlbum";
const initAlbumWrite = [
  {
    pics: ["string"],
    dto: {
      iteacher: 0,
      albumTitle: "string",
      albumContents: "string",
    },
  },
];

const AlbumWrite = () => {
  return <WriteAlbum submit="등록" />;
};

export default AlbumWrite;
