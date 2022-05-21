import { useSelector,useDispatch } from "react-redux";
import { removeAlbum } from "../../store/modules/album";
import Button from "../Common/Button";

export default function DeleteInner() {
  const dispatch = useDispatch();
  const selectedAlbumId = useSelector(({album}) => album.selectedAlbum.id);
  const handleClick = () => {
    dispatch(removeAlbum(selectedAlbumId));
  }

  return (
    <div>
      정말로 삭제하시겠습니까?
      <Button handleClick={handleClick}>삭제하기</Button>
      <style jsx>{`
        div{
          height: 100%;
          text-align: center;
          color: #67839e;
        }
        `}</style>
    </div>
  )
}
