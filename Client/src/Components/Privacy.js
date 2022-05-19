import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

const PrivacyContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const UserInfoBox = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const EleBox = styled.div`
  margin-left: 0px 100px;
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;
const SpanBox = styled.div`
  width: 150px;
  text-align: right;
  padding-top: 5px;
`;
const Span = styled.span`
  font-size: 24px;
`;
const InputBox = styled.div`
  width: 100%;
  max-width: 355px;
  padding-left: 20px;
  padding-top: 2px;
`;
const Input = styled.input`
  margin: 1px 10px;
  font-size: 16px;
  padding: 0px 15px;
  height: 30px;
  width: 300px;
  border: 1px #cccccc solid;

  &:focus {
    border-color: #0982f0;
  }
`;
const ButtonBox = styled.div`
  height: 100px;
  padding-left: 237px;
`;
const Button = styled.button`
padding : 1px;
  height: 35px;
  width: 150px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(var(--d69, 0, 149, 246), 1);
  `;

export default function Privacy() {
  const name = 'SeoJinSeok';
  const email = '@naver.com';
  const github_url = 'https:github.com';
  return (
    <PrivacyContainer>
      <UserInfoBox>
        <EleBox>
          <SpanBox>
            <Span>이름</Span>
          </SpanBox>
          <InputBox>
            <Input
              defaultValue={name}
              type="text"
              placeholder="이름"
              required
            />
          </InputBox>
        </EleBox>

        <EleBox>
          <SpanBox>
            <Span>email</Span>
          </SpanBox>
          <InputBox>
            <Input
              defaultValue={email}
              type="text"
              placeholder="email"
              required
            />
          </InputBox>
        </EleBox>

        <EleBox>
          <SpanBox>
            <Span>gitHub ID</Span>
          </SpanBox>
          <InputBox>
            <Input
              defaultValue={github_url}
              type="text"
              placeholder="gitHub ID"
              required
            />
          </InputBox>
        </EleBox>

        <EleBox>
          <SpanBox>
            <Span>비밀번호</Span>
          </SpanBox>
          <InputBox>
            <Input type="password" placeholder="비밀번호" required />
          </InputBox>
        </EleBox>

        <EleBox>
          <SpanBox>
            <Span>비밀번호 확인</Span>
          </SpanBox>
          <InputBox>
            <Input type="password" placeholder="비밀번호 확인" required />
          </InputBox>
        </EleBox>

        <EleBox>
          <SpanBox>
            <Span></Span>
          </SpanBox>
          <ButtonBox>
            <Button>정보 수정</Button>
          </ButtonBox>
        </EleBox>
      </UserInfoBox>
    </PrivacyContainer>
  );
}
