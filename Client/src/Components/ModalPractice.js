import React from "react";
import styled from "styled-components";
import axios from "axios";

axios.defaults.withCredentials = true;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: green;
`;
const Input = styled.div`
  height: 50px;
  width: 200px;
  font-size: 30px;
`;
const Signup = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // background: #00000080;
  // z-index: 10000;
  // font-size: 30px;
  // justify-content: center;
  // align-item: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// eslint-disable-next-line react/prop-types
export default function ModalPractice(handleLoginOrSignupModal) {
  return (
    <Signup>
      <ModalContainer>
        <div
          onClick={() => {
            handleLoginOrSignupModal();
          }}
          className="close-btn"
        >
          &times;
        </div>
        <Input type="text" placeholder="아이디" required />
        <Input type="text" placeholder="비밀번호" required />
      </ModalContainer>
    </Signup>
  );
}
