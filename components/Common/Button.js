export default function Button(props) {
  return (
    <>
      <button onClick={props.handleClick}>{props.children}</button>
      
      <style jsx>{`
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
    </>
  )
}
