import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Privacy from '../Components/Privacy';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin-top: 30px;
  border: 1px solid;
  border-color: #e2e2e2;
  background: #fafafa;
`;
const MiddleBox = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
  border-color: #e2e2e2;
  background: white;
`;
const MenuUl = styled.ul`
  display: column;
  border: 1px solid;
  border-color: #e2e2e2;
  width:100%
  heigth:100%;
`;
const MenuLi = styled.li`
  height: 20px;
  width: 200px;
  padding: 16px 16px 16px 30px;
  font-size: 20px;
`;
const RightBox = styled.div`
  padding: 30px 50px;
  width: 100%;
`;
export default function MyPage() {
  return (
    <MyPageContainer>
      <MiddleBox>
        <MenuUl>
          <MenuLi>프로필</MenuLi>
          <MenuLi>나의 정보</MenuLi>
          <MenuLi>회원탈퇴</MenuLi>
        </MenuUl>
        <RightBox>
          <Privacy />
        </RightBox>
      </MiddleBox>
    </MyPageContainer>
  );
}
