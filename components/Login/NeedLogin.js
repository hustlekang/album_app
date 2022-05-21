import React from 'react'

export default function NeedLogin() {
  return (
    <div>로그인을 해주세요
      <style jsx>{`
        div{
          position: relative;
          text-align: center;
          margin-top: 50px;
          
          width: 100% ;
              {/* left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              z-index: 99; */}
        }
        `}</style>
    </div>
  )
}
