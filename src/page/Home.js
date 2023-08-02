import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";

import profilePic from "../image/profile.jpg";

const HomeStyle = styled.div`
  height: 595px;
`;

const BgGroup = styled.div` 
  height: 100%;
  display: flex;
  position: relative;

  .bg-left {
    background-color: #8EA7E9;
    flex: 1
  };
  
  .bg-right {
    background-color: #FFF2F2;
    flex: 2
  };
`;

const ProfileGroup = styled.div`
  height: 350px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right:0px;

  
  h2 {
    font-size: 40px;
    font-weight: 700;
  };

  h4 {
    font-size: 23px;
  };
`;

const ProfileCard = styled.div`
  width: 280px;
  background-color: #E5E0FF;
  box-shadow: -8px 5px 10px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin: 25px;
    border-radius: 50%;
  };

  h4 {
    font-weight: 700;
    margin-bottom: 20px;
  };

  p {
    font-size: 20px;
    margin-bottom: 50px;
  };
  
  p:before {
    content: "";
    display: block;
    text-align: center;
    width: 40px;
    margin: 20px auto;
    border-bottom: 2px solid #7286D3;
  };

  svg {
    font-size: 30px;
    margin-bottom: 15px;
  };

  svg + svg {
    margin-left: 20px;
  };
  `;

const ProfileContent = styled.div`
  margin-left: 30px;

  h2 + h4 {
    margin-top: 20px;
  };

  h4 + p {
    margin-top: 20px;
  };
`;


function Home(props) {
  return (
    <HomeStyle>
      <BgGroup>
        <div className='bg-left'></div>
        <div className='bg-right'></div>

        <ProfileGroup>
          <ProfileCard>
            <img src={profilePic} />
            <h4>김수진</h4>
            <p>FE developer</p>

            <div className='sns-Icon'>
              <AiOutlineGithub />
              <RiNotionFill />
            </div>
          </ProfileCard>
          <ProfileContent>
            <h2>안녕하세요</h2>
            <h4>나무처럼 성장하는 개발자</h4>
            <p>어쩌고 저쩌고 블라블라</p>
            {/* 버튼 */}
          </ProfileContent>
        </ProfileGroup>
      </BgGroup>
    </HomeStyle>
  );
}

export default Home;