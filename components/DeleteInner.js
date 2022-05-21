import { useSelector,useDispatch } from "react-redux";
import { removeAlbum } from "../store/modules/album";
import Button from "./Button";

export default function DeleteInner() {
  const dispatch = useDispatch();
  const selectedAlbum = useSelector(({album}) => album.selectedAlbum);
  const handleClick = () => {
    dispatch(removeAlbum(selectedAlbum));
  }

  return (
    <div>
      정말로 삭제하시겠습니까?
      <Button handleClick={handleClick}>삭제하기</Button>
      <style jsx>{`
        div{
          height: 100%;
          text-align: center;
        }
        `}</style>
    </div>
  )
}
