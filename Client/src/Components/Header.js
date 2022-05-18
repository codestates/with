import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div id="container">
      <div id="login_area">
        <div id="login">로그인
        { /*<LoginModal />, 윗부분에 모달 컴포넌트 임포트*/ }
        </div>
        <div id="sign_up">회원가입
        { /*<SignUpModal />, 윗부분에 모달 컴포넌트 임포트*/ }
        </div>
      </div>
      <div id="logo">
        <Link to='/'>
          <img scr='../../../Public/with_logo.png' alt='logo'/>
        </Link>
      </div>

    </div>
  );
};

export default Header;