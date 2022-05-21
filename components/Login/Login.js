import React, { useEffect, useInsertionEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { setLoginedUser } from '../../store/modules/user';
import { loginValidation } from '../../store/modules/user';

export default function Login() {
  const dispatch = useDispatch();
  const loginedUser  = useSelector(({user})=>user.loginedUser) ?? {
    id: undefined,
    userName:undefined,
    email:undefined,
    pw:undefined
  };
  const [loginInfo,setLoginInfo] = useState({email : '', pw : ''});
  const [isShow,setIsShow] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isRightEmail,setIsRightEmail] = useState(true);
  const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [warningStr,setWarningStr] = useState('');
  const warningStrArr = [
    '',
    '이메일과 비밀번호를 모두 입력하세요',
    '등록되지 않은 이메일입니다',
    '비밀번호가 일치하지 않습니다'
  ] 
  // useEffect(()=>{
  //   if (!loginedUser.id) {
  //     setIsLogin(false)
  //   }
  //   else {
  //     setIsLogin(true)
  //   }
  //   console.log(loginedUser)
    
  // },[loginedUser]);

  useEffect(()=>{
    if (loginInfo.email !=='' && loginInfo.pw !==''){
      setWarningStr(warningStrArr[0])
    }
  },[loginInfo]);

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
    if (loginInfo.email==='' || loginInfo.pw==''){
      setWarningStr(warningStrArr[1]);
    }
    else{
      const validation = loginValidation(loginInfo);
      if (validation.result==='success'){
        dispatch(setLoginedUser(validation.info));
        setLoginInfo({email : '', pw : ''});
      }
      else{
        //'unknownUser','pwUncorrect'
        if (validation.reason === 'unknownUser'){
          setWarningStr(warningStrArr[2]);
          setIsShow(true);
          // 등록되지 않은 이메일입니다
        }
        else{
          // 비밀번호가 일치하지 않습니다 
          setWarningStr(warningStrArr[3]);
          setIsShow(true);
        }
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
      {!loginedUser.id
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
            <div className="warning">{warningStr}</div>
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
            cursor: pointer;
          }
          .btn:hover{  
            background-color : #e5e5e5;
          }  
          .error{
            border: 2px solid rgb(231, 103, 103);
          }
          `}</style>
      </div>
  )
}
