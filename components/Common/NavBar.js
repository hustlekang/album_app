import { useSelector,useDispatch } from "react-redux"
import { setPage } from "../../store/modules/album";

export default function NavBar() {
  const dispatch = useDispatch();
  const albumCnt  = useSelector(({album})=>album.albums.length);
  const pageCnt = Math.ceil(albumCnt/5);
  const pages = [...Array(pageCnt)].map((v,i) => i); // Array(pageCnt).map하면 렌더링이 안됨;

  const changePage = (e) => {
    dispatch(setPage(e.target.id));
  }

  return (
    <div>
    {pages.map((page,index) => <button
      key={index} 
      id={page+1} 
      onClick={changePage}>
        {page+1}
      </button>
    )}

    <style jsx>{`
      div{
        display: flex;
        padding: 5px;
        margin-bottom: 5px;
      }
      button{
        width: 100%;
        height: 30px;
        background-color: #67839e;
        border: 1px solid rgb(62, 66, 129);
        border-radius: 1px;
        cursor: pointer;
        border-radius: 3px;
        color: white;
      }
      button:hover{
        background-color: white;
        color: black;
      }
    `}</style>
  </div>
  )
}
