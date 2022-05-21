import { useState } from 'react'
import Modal from '../Common/Modal';
import RegisterInner from './RegisterInner';
import Button from '../Common/Button';
import NeedLogin from '../Login/NeedLogin';
import { useSelector } from 'react-redux';

export default function RegisterButton() {
  const loginedUser  = useSelector(({user})=>user.loginedUser);
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      <Button handleClick={()=>setIsOpen(true)}>앨범 추가하기</Button>
      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        Component={loginedUser.id ? RegisterInner : NeedLogin}
        size={loginedUser.id?'big' : 'small'}
      />
    </>
  )
}

