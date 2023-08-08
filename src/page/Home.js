import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";

import profilePic from "../image/profile.jpg";
import { Link, NavLink } from 'react-router-dom';

const HomeStyle = styled.div`
  height: 700px;
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
  word-break: keep-all;

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

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 20px;
    }

    h4 {
      font-size: 17px;
    }
  }
`;

const SnsLink = styled(NavLink)`
  color: #000;

  &:hover {
    color: #7286D3;
  }
`

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
    margin: 0 5px 15px 5px;
  };

  @media screen and (max-width: 700px) {
    width: 180px;
    margin-left: 15px;

    img {
      width: 100px;
    }

    h4 {
      margin: 0;
    };

    p {
      font-size: 17px;
      margin-top: 0;
      margin-bottom: 30px;
    };

    p:before {
    }

    svg {
      font-size: 25px;
    }
  }
  `;

const ProfileContent = styled.div`
  margin-left: 30px;

  h2 + h4 {
    margin-top: 20px;
  };

  h4 + p {
    margin-top: 40px;
  };

  p + p {
    margin-top: 10px;
  }

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    padding: 15px;

    h4 + p {
      margin-top: 20px;
    };

    p {
      font-size: 12px;
    }
  }

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
            <SnsLink to={'https://github.com/evejin9'} target='_blank'><AiOutlineGithub /></SnsLink>
            <SnsLink to={'https://tiny-minibus-e8b.notion.site/FE-0f3936aea6664243b7d2b7a786a5ca2a'} target='_blank'><RiNotionFill /></SnsLink>
            </div>
          </ProfileCard>
          <ProfileContent>
            <h2>안녕하세요</h2>
            <h4>나무처럼 성장하는 개발자</h4>
            <p>새로 배우는 것을 좋아하고 활용하는 것을 즐깁니다.</p>
            <p>책임감을 가지고 주어진 일을 끝까지 해내려 노력합니다.</p>
            {/* 버튼 */}
          </ProfileContent>
        </ProfileGroup>
      </BgGroup>
    </HomeStyle>
  );
}

export default Home;