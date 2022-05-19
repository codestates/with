import { useState } from 'react';
import styled from 'styled-components';
import './PostUploadModal.css'
import dummyData from '../Source/dummyData.js'

// Modal을 구현하는데 전체적으로 필요한 CSS
export const ModalContainer = styled.div`
  justify-content: center;
  align-items : center;
  display : flex;
  height : 100%;
  position : relative;
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  background-color:rgba(0,0,0,.3);
  z-index : 1;
  height : 100%;
  width : 100%;
  position : fixed;
  justify-content: center;
  align-items : center;
  display: flex; // 얘를 하니까 codestates 창이 뜸
  top : 0px;
  bottom : 0px;
  left : 0px;
  right : 0px;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))
// TODO : Modal창 CSS를 구현합니다.
  `
  justify-content: center;
  align-items : left;
  display : flex;
  height : 40em;
  width : 20em;
  background-color: white;
  border-radius: 1rem;
  flex-direction: column;
  position : relative; 
  color : purple;
  padding: 1.5em;
  `;

export const closeButton = styled.button`
background-color: transparent;
border-color: blue;
align-items: right;
`;

const PostUploadModal = () => {
  // 새로 게시글을 작성하고 업로드 할 수 있게 구현
  const [posts, newPost] = useState(dummyData);
  // const [user, userID] = useState('');
  const [info, teamInfo] = useState('');
  const [task, teamTask] = useState('');
  const [qualification, teamQualification] = useState('');
  const [period, recruitmentPeriod] = useState('');
  const [contact, contactInfo] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = (event) => {
    const post = {
      id: posts.length+1,
      info: info,
      task: task,
      qualification: qualification,
      period: period,
      contact: contact
    };
    newPost([post,...posts]);
  };

  const handleChangeTeam = (event) => {
    // 팀 소개 입력
    teamInfo(event.target.value);
  }

  const handleChangeTask = (event) => {
    // 팀 업무 소개 입력
    teamTask(event.target.value);
  }

  const handleChangeQualification = (event) => {
    // 자격 요건 소개 입력
    teamQualification(event.target.value);
  }

  const handleChangePeriod = (event) => {
    // 지원 기간 입력
    recruitmentPeriod(event.target.value);
  }

  const handleChangeContact = (event) => {
    // 연락처 입력
    contactInfo(event.target.value);
  }

  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContainer>
      {(isOpen ? 
      <ModalBackdrop>
      <ModalView>
        <closeButton onClick={(openModalHandler)}>X</closeButton>
        <div className="postForm_wrapper">
          <div className="postForm_inputContainer">
            <div className="postForm_inputWrapper">
              <div className="postForm_input">
                팀 소개<br/>
                <textarea
                  placeholder="팀에 대해 간략히 적어주세요"
                  className="postForm_inputArea_teamInfo"
                  onChange={handleChangeTeam}/><br/>
                주요 업무<br/>  
                  <textarea
                    placeholder="업무에 대해 설명해주세요"
                    className="postForm_inputArea_task"
                    onChange={handleChangeTask}/><br/>
                  자격요건<br/>
                  <textarea
                    placeholder="자격요건을 설명해주세요"
                    className="postForm_inputArea_qualification"
                    onChange={handleChangeQualification}/><br/>
                  지원기간<br/>
                  <textarea
                    placeholder="지원 기간을 작성해주세요"
                    className="postForm_inputArea_period"
                    onChange={handleChangePeriod}/><br/>
                  연락처<br/>
                  <textarea
                    placeholder="연락처를 입력해주세요"
                    className="postForm_inputArea_contact"
                    onChange={handleChangeContact}/>
              </div>
              <div className="postForm_submit">
                <button className="postForm_submitButton"
                onClick={handleButtonClick}
                >등록하기</button>
              </div>
            </div>
          </div>
        </div>
      </ModalView>
      </ModalBackdrop>
                        :null)}
    </ModalContainer>
  );
};

export default PostUploadModal;