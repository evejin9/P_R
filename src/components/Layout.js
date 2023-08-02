import React from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AiFillGithub } from "react-icons/ai"; 

const HeaderStyle = styled.div`
  justify-content: space-between;
  align-items: center;  
  background-color: #fff;
  padding: 30px;
  display: flex;

  .title {
    display: flex;

    h1 {
      font-size: 20px;
      font-weight: 700;
      margin-right: 6px;
    }
  }

  ul {
    display: flex;
    
    li + li {
      margin-left: 10px;
    }
  }
  `;

const FooterStyle = styled(HeaderStyle)`
  background-color: #fff;
  padding: 20px;

  p {
    font-size: 11px;
  };
`;

const FooterGroup = styled.div`
  h3 {
    font-size: 11px;
    font-weight: 700;
  };

  h3 + p {
    margin-top: 10px;
  };
`;

function Layout(props) {

  const navigate = useNavigate();

  const now = dayjs();

  return (
    <>
      <HeaderStyle>
        <div className='title'>
          <h1> 나는 제목 </h1>
          <h2>/ FE developer</h2>
        </div>
        <ul>
          <li onClick={() => navigate('/')} >Home</li>
          <li onClick={() => navigate('/introduce')}>Introduce</li>
          <li onClick={() => navigate('/skills')}>Skills</li>
          <li onClick={() => navigate('/project')}>Project</li>
        </ul>
      </HeaderStyle>

      <Outlet />

      <FooterStyle>
        <p> &#169; {now.get("year")} by Sujin Kim. </p>
        <FooterGroup>
          <h3>Call</h3>
          <p>010-5604-5894</p>
        </FooterGroup>
        <FooterGroup>
          <h3>Email</h3>
          <p>evejin9@gmail.com</p>
        </FooterGroup>
        <FooterGroup>
          <AiFillGithub />
        </FooterGroup>
      </FooterStyle>
    </>
  );
}

export default Layout;
