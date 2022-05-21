import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button"
import DeleteInner from "./DeleteInner";

export default function DeleteBtn() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      <Button handleClick={()=>setIsOpen(true)}>삭제</Button>
      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        Component={DeleteInner}
      />      
    </>
  )
}