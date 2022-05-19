import React from 'react';
import './Post.css';
import postit from '../Source/post_it.png'

const Post = ({ post }) => {

  return (
    <li className="post" id={post.id}>
      <div className="post_wrap">
        <div className="postit_img">
          <img src={postit} alt=""/>
        </div>  
        <div className="post_content">
          <div className="post_info">
            팀 소개
            <p>{/* 데이터 베이스에 있는 팀 소개 가져오기 */
            post.teamInfo}</p>
          </div>
          <div className="post_task">
            주요 업무
            <p>{/* 데이터 베이스에 있는 주요 업무 가져오기 */
            post.task}</p>
          </div>
        </div>
      </div>
    </li>
  );
  
};

export default Post;