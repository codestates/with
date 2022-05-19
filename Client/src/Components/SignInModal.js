import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.withCredentials = true;

const SignInContainer = styled.div`

  max-height: 400px;
  max-width: 350px;
  height:380px;
  border-radius: 5px;
  margin: 32px auto 0;
  // background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  // absolute: fixed;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


  > .logo {
    height: 40px;
    font-size: 40px;
    font-family: 'Dongle-Light';
    padding-bottom:80px;
  }

  > .input_box_signin {
    height: 110px;
      > .input_tag_box {
        padding-top: 10px;
        height:40px;
      }
    }

  > .button_box_signin{
    height:80px;
  }

  }
`;
const LoginInput = styled.input`
  height: 20px;
  width: 250px;
  font-size: 16px;
  font-family: 'LucidaGrande';
  margin: 7px;
  padding: 7px;
  // background-color: #dbdbdb;
`;

const LoginButton = styled.button`
  margin: 10px;
  height: 30px;
  width: 268px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: rgba(var(--d69, 0, 149, 246), 1);
  border: none;
`;

export default function SignIn() {
  return (
    <SignInContainer>
      <div className="logo">WITH</div>
      <div className="input_box_signin">
        <div className="input_tag_box">
          <LoginInput type="text" placeholder="아이디" required />
        </div>
        <div className="input_tag_box">
          <LoginInput type="password" placeholder="비밀번호" required />
        </div>
      </div>

      <div className="button_box_signin">
        <LoginButton>login</LoginButton>
      </div>
    </SignInContainer>
  );
}
