export default function Modal({isOpen,setIsOpen,Component,size}) {
  
  return (
      <div>
          {isOpen && 
          <div className={size==='big'? 'modal big':'modal small'}>
              <div className="btn-close">
                  <span onClick={()=>setIsOpen(false)}>X</span>
              </div>
              <Component setIsOpen={setIsOpen}/>
          </div> }
          {isOpen && <div className="dimmer"/>}

          <style jsx>{`
            .modal{
              width: 500px;
              height: 500px;
              border-radius: 15px;
              background-color:white;
              position: fixed;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              z-index: 99;
            }
            .big{
              width: 500px;
              height: 500px;
            }
            .small{
              width: 200px;
              height: 200px;
            }
            .btn-close{
              margin: 10px;
              text-align: center;
              
            }
            .modal .btn-close span{
              cursor: pointer;
              font-size: 30px;
            }
            .modal-text{
              color:#4904CA;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              cursor: default;
            }
            .dimmer{
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: rgba(0, 0, 0,.3);
            }
          `}</style>
      </div>
  )
}
