// 여기에 header와 mini post 조립해서 메인페이지 만들기
// 게시글 작성 버튼 만들기 -> 작성 모달 띄우기
// 그 후 App.js에 가져와서 사용하기

import React, { useState } from 'react';
import Header from '../Components/Header.js';
import Post from '../Components/Post';
import PostUploadModal from '../Components/PostUploadModal.js';
<<<<<<< HEAD
// import dummyData from '../../Public/dummyData.js'
=======
import dummyData from '../Source/dummyData.js';
>>>>>>> db9d785857cf268728f2af6cd7c7ebc4e88ed1df

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPostUploadModal = () => {
    setIsOpen(!isOpen)
  };
<<<<<<< HEAD

  // const [posts, newPost] = useState(dummyData);
=======
>>>>>>> db9d785857cf268728f2af6cd7c7ebc4e88ed1df
  return (
    <>
      <Header />
      <button className="postUpload" onClick={(openPostUploadModal)}>
<<<<<<< HEAD
        등록하기</button>
        {/*회원 가입 여부에 따라 업로드모달 열어주기도 넣어야..*/
        (isOpen ? <PostUploadModal />: null)
        }
      {/* <div className="post_area">
        {posts.map(el => <Post post = {el} key = {el.id} />)}
      </div> */}
=======
          등록하기</button>
          {/*회원 가입 여부에 따라 업로드모달 열어주기도 넣어야..*/
          (isOpen ? <PostUploadModal />: null)
          }
      <div className="post_area">
        <div className="post_list">
          {dummyData.map(el => <Post post = {el} key = {el.id} />)}
        </div>
      </div>
>>>>>>> db9d785857cf268728f2af6cd7c7ebc4e88ed1df
    </>
  );
};

export default Main;