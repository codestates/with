import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.withCredentials = true;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  font-family: 'Dongle-Light';
  font-size: 40px;
`;

const SignUpContainer = styled.div`
  border-radius: 5px;
  max-height: 900px;
  max-width: 350px;
  height: 600px;
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Logo = styled.div`
  padding-top: 30px;
  height: 100px;
`;

const InputBoxSignup = styled.div`
  height: 350px;
`;
const InputTag = styled.input`
  height: 20px;
  width: 250px;
  font-size: 16px;
  font-family: 'LucidaGrande';
  margin: 7px;
  padding: 7px;
  // background-color: #dbdbdb;
`;
const ButtonBoxSignUp = styled.div`
  height: 70px;
`;
const SignUpButton = styled.button`
  padding : 1px
  height: 35px;
  width: 268px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(var(--d69, 0, 149, 246), 1);
`;
export default function SignUp() {
  return (
    <ModalBackdrop>
      <SignUpContainer>
        <Logo>WITH</Logo>

        <InputBoxSignup>
          <div className="input_tag_box">
            <InputTag type="text" placeholder="아이디" required />
          </div>
          <div className="input_tag_box">
            <InputTag type="text" placeholder="이름" required />
          </div>
          <div className="input_tag_box">
            <InputTag type="email" placeholder="email" required />
          </div>
          <div className="input_tag_box">
            <InputTag type="text" placeholder="gitHub ID" required />
          </div>
          <div className="input_tag_box">
            <InputTag type="password" placeholder="비밀번호" required />
          </div>
          <div className="input_tag_box">
            <InputTag type="password" placeholder="비밀번호 확인" required />
          </div>
        </InputBoxSignup>

        <ButtonBoxSignUp>
          <SignUpButton>회원가입</SignUpButton>
        </ButtonBoxSignUp>
      </SignUpContainer>
    </ModalBackdrop>
  );
}
