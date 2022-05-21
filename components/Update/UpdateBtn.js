import { useState } from "react";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import UpdateInner from "./UpdateInner";
export default function UpdateBtn() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      <Button handleClick={()=>setIsOpen(true)}>수정</Button>
      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        Component={UpdateInner}
        size={"big"}
      />      
    </>
  )
}



