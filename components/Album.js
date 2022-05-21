import { useSelector,useDispatch } from "react-redux";
import { selectAlbumByPage } from "../store/modules/album";
import Image from "next/image";
import { UserNameById } from "../store/modules/user";
import DeleteBtn from "./Delete/DeleteBtn";
import UpdateBtn from "./Update/UpdateBtn";
import { selectAlbum } from "../store/modules/album";
export default function Album() {
  const dispatch = useDispatch();
  const pageNumber  = useSelector(({album}) => album.page);
  const albums = useSelector(({album}) => album.albums);
  const albumsByPage = selectAlbumByPage(albums,pageNumber);
  const loginedUser  = useSelector(({user})=>user.loginedUser) ?? {
    id: undefined,
    userName:undefined,
    email:undefined,
    pw:undefined
  };
  return (
    <div className="card-container">
      {albumsByPage.map(album => {
        return (
          <div 
            key={album.id} 
            className="card"
            onClick={()=>dispatch(selectAlbum(album))}
          >  
            <Image
              src={`https://place-hold.it/400x400/67839e/ffffff&text=Photo${album.id}&bold&italic&fontsize=20`}
              alt="image"
              width={400}
              height={400}
            />
            <h1>{album.title}</h1>
            <h2>작성자 : {UserNameById(album.userId)}</h2>
            <div className="btn-container">
              {loginedUser.id == album.userId && <DeleteBtn albumId={album.id}></DeleteBtn>}
              {loginedUser.id == album.userId && <UpdateBtn albumId={album.id}></UpdateBtn>}
            </div>
          </div>
        )
      })}
      <h3>-{pageNumber}-</h3>

      <style jsx>{`
        .card-container{
          margin: 0 auto;
          
          box-sizing: border-box;  
        }
        .card{        
          border: 2px solid #67839e;
          border-radius: 5px;
          width: 400px;
          margin: 0 auto 20px;
          box-sizing: border-box;
        }
        
        .card h1{
          font-size: 16px;
          font-weight: 700;
          margin-top: 5px;
          color : black;
          padding : 0 15px;
          
        }
        .card h2{
          font-size: 14px;
          font-weight: 500;
          margin-top: 5px;
          color : black;
          padding : 0 15px;
        }
        .btn-container{
          display: flex;
          padding: 0 7px;
        }
        h3{
          width: 100%;
          text-align: center;
          margin: 10px 0;
          color: #67839e;
        }
    `}</style>
    </div>
    
  )
}
