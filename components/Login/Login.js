import React, { useEffect, useInsertionEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { setLoginedUser } from '../../store/modules/user';
import { loginValidation } from '../../store/modules/user';

export default function Login() {
  const dispatch = useDispatch();
  const loginedUser  = useSelector(({user})=>user.loginedUser);
  const [loginInfo,setLoginInfo] = useState({email : '', pw : ''});
  const [isShow,setIsShow] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isRightEmail,setIsRightEmail] = useState(true);
  const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  useEffect(()=>{
    if (!loginedUser.id) {
      setIsLogin(false)
    }
    else {
      setIsLogin(true)
    }
    console.log(loginedUser)
    
  },[loginedUser]);

  const handleChange = e => {
    if (e.target.type === "email"){
      setLoginInfo({...loginInfo,email:e.target.value});
      setIsRightEmail(regExp.test(loginInfo.email));
    }
    else{
      setLoginInfo({...loginInfo,pw:e.target.value})
    } 
  };

  const handleLogin = () => {
    const validation = loginValidation(loginInfo);
    if (validation.result){
      dispatch(setLoginedUser(validation.info));
    }
    else{
      //'unknownUser','pwUncorrect'
      if (validation.reason === 'unknownUser'){
        console.log('등록되지않은이메일')
        setIsShow(true);
        // 등록되지 않은 이메일입니다
      }
      else{
        // 비밀번호가 일치하지 않습니다 
        setIsShow(true);
      }
    
    }
  }
  const handleEnter = (e) =>{
    if (e.key === 'Enter') return handleLogin();
    return 
  }
  const handleLogout = () =>{
    dispatch(setLoginedUser({
      id: undefined,
      userName:undefined,
      email:undefined,
      pw:undefined
    }));
  };
  return (
    <div className='login-container'>
      {!isLogin
        ?
          <div className='login-elems'>
            <input
              type="email" 
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="email"
            />
            <input 
              type="password" 
              onChange={handleChange} 
              onKeyUp={handleEnter}
              placeholder="pw"
            />
            <button className='btn' onClick={handleLogin}>로그인</button>
            {!isRightEmail && <div className="warning">올바른 이메일을 입력하세요</div>}
          </div>     
        : 
          <div className='login-after'>
            <p>
            {loginedUser.userName}
            </p>
            <button className='btn' onClick={handleLogout}>로그아웃</button>
          </div>
       }

        <style jsx>{`
          .login-container{
            float: right;
            margin-right: 10px;
            margin-top: 10px;
          }
          .warning{
            display: block;
            color: rgb(231, 103, 103);
            margin: 5px 1px 1px 0;
            font-size: 16px;
            border-radius: 2px;
          }
          
          input{
            padding: 3px;
            margin-right: 3px;
          }
          .login-after{
            display: flex;
          }
          .login-after p{
            padding: 3px;
            margin: 0 10px;
            color: black;
            font-weight: 600;
          }
          .btn{
            float: right;
            height: 26px;
            margin-right: 10px;
            border-radius : 5px;
            background-color : white;
            border: 1px solid #dbdbdb;
            font-weight: 600;
          }
          .error{
            border: 2px solid rgb(231, 103, 103);
          }
          `}</style>
      </div>
  )
}
