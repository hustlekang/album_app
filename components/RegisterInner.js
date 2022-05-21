import { addAlbum,increaseId} from "../store/modules/album";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Input({setIsOpen}) {
  const loginedUser  = useSelector(({user})=>user.loginedUser);
  const id = useSelector(({album}) => album.id);

  const initAlbum = {
    userId : loginedUser.id,
    id : id,
    title : "",
  };
  const [newAlbum,setNewAlbum] = useState(initAlbum);
  const [newTitle,setNewTitle] = useState('');
  const [isShow,setIsShow] = useState(false);
  const dispatch = useDispatch();
  
  const handleChange =  (e) =>{
    setNewTitle(e.target.value);
  }

  const handleClick = () =>{
    if (newTitle===''){
      setIsShow(true);
    }
    else{
      dispatch(addAlbum(newAlbum));
      dispatch(increaseId());
      setNewAlbum(initAlbum);
      setIsOpen(false);
    }
  }
  const handleEnter = (e) =>{
    if (e.key ==='Enter') return handleClick();
    return;
  }

  useEffect(()=>{
    setNewAlbum({...newAlbum,title:newTitle});
  },[newTitle]);

  return (
    <div>
      <Image
              src={`https://place-hold.it/300x300/67839e/ffffff&text=Photo&bold&italic&fontsize=20`}
              alt="image"
              width={300}
              height={300}
            />

      <input 
        id="title"
        className={isShow && "error"}
        onChange={handleChange} 
        placeholder="제목을 입력해 주세요"
        onKeyUp={handleEnter}
      />
      
      {isShow && <label htmlFor="title">제목을 반드시 입력해야 합니다</label>}

      <button onClick={handleClick}>작성하기</button>

      <style jsx>{`
          div{
            text-align: center;

          }
          input{
            width : 100%;
            height:40px;
            margin : 10px 0;
            border : 1px solid #dbdbdb;
            border-radius : 2px;
            font-size : 16px;
            font-weight : 400;
            letter-spacing : 5px;
            box-sizing: border-box;
            padding: 0 10px;
          }
          .error{
            border: 2px solid red;
          }
          label{
            display: block;
            text-align: center;
            color: red;
            font-size: 14px;
          }
          button{
            width : 100%;
            height:60px;
            margin : 10px 0;
            border : 1px solid #dbdbdb;
            border-radius : 5px;
            background-color : white;
            font-size : 20px;
            font-weight : 600;
            letter-spacing : 5px;
          }
          button:hover{  
            background-color : #e5e5e5;
            cursor : pointer;
          }

        `}</style>
    </div>

  )
}
