import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateAlbum } from "../store/modules/album";
import Button from "./Button";
import Image from "next/image";

export default function UpdateInner({setIsOpen}) {
  const [isShow,setIsShow] = useState(false);
  const dispatch = useDispatch();
  const selectedAlbum = useSelector(({album}) => album.selectedAlbum);
  const [newAlbum,setNewAlbum] = useState(selectedAlbum);

  const handleChange = e => {
    setNewAlbum({...newAlbum,title:e.target.value});
  }
  const handleClick = () => {
    if (newAlbum.title===''){
      setIsShow(true);
    }
    else {
    dispatch(updateAlbum(newAlbum));
    setIsOpen(false);
    }
  }

  return (
    <div>
      <Image
        src={`https://place-hold.it/300x300/67839e/ffffff&text=Photo${selectedAlbum.id}&bold&italic&fontsize=20`}
        alt="image"
        width={300}
        height={300}
      />
      <textarea 
        className={isShow && "error"}
        onChange={handleChange} 
        defaultValue={selectedAlbum.title}
        autoFocus
      />
      {isShow && <p>수정할 제목을 반드시 입력해야 합니다</p>}
      <Button handleClick={handleClick}>수정하기</Button>

      <style jsx>{`
        div{
          height: 100%;
          text-align: center;
        }
        textarea{
            width : 90%;
            height:60px;
            margin : 10px 0 3px 0;
            border : 1px solid #dbdbdb;
            border-radius : 2px;
            font-size : 14px;
            font-weight : 400;
            letter-spacing : 5px;
            box-sizing: border-box;
            padding: 10px 5px;
          }
          .error{
            border: 2px solid rgb(231, 103, 103);
            border-radius: 5px;
          }
          p{
          color: rgb(231, 103, 103);
            margin:0;
          }
      `}</style>
    </div>
  )
}
