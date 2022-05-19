import React from "react";
import styled from "styled-components";
import axios from "axios";

axios.defaults.withCredentials = true;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 1, 0, 0.4);
  display: grid;
  place-items: center;
`;
const ModalView = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  width: 300px;
  height: 180px;

  > div.explanation-text {
    padding-top: 5px;
    font-size: 20px;
  }

  > div.input-tag-box {
    margin-top: 15px;
  }

  > .button-box {
    padding: 10px;
  }
`;
const PasswordInput = styled.input`
  height: 25px;
  width: 220px;
`;
const Button = styled.button`
padding : 1px;
margin:10px;
height: 35px;
width: 180px;
border-radius: 5px;
border: none;
color: white;
font-size: 20px;
cursor: pointer;
background-color: rgba(var(--d69, 0, 149, 246), 1);
`;

export default function Withdrawal() {
  return (
    <ModalBackdrop>
      <ModalView>
        <div className="explanation-text">회원 탈퇴를 원하시면</div>
        <div className="explanation-text">비밀번호를 입력해주세요.</div>
        <div className="input-tag-box">
          <PasswordInput
            className="password-input"
            type="text"
            placeholder="비밀번호"
            required
          />
        </div>
        <div className="button-box">
          <Button>탈퇴하기</Button>
        </div>
      </ModalView>
    </ModalBackdrop>
  );
}
