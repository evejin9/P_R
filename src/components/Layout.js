import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
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
    align-items: center;

    h1 {
      font-size: 20px;
      font-weight: 700;
      margin-right: 6px;
    }
  }

  ul {
    display: flex;
    
    li:hover {
      font-weight: 700;
      color: #8EA7E9;
    }

    li + li {
      margin-left: 10px;
    }
  }

  /* 미디어쿼리 */
  @media screen and (max-width: 700px) {
    .title h1 {
      font-size: 16px;
    }

    h2 {
      font-size: 13px;
    }

    ul li {
      font-size: 13px;
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

const GitLink = styled(NavLink)`
  color: #000;

  &:hover {
    color: #7286D3;
  }

  svg {
    font-size: 20px;
  }
`

function Layout(props) {

  const navigate = useNavigate();

  const now = dayjs();

  return (
    <>
      <HeaderStyle>
        <div className='title'>
          <h1> 김수진 </h1>
          <h2>/ FE developer</h2>
        </div>
        <ul>
          <li className='cursor-pointer' onClick={() => navigate('/')} >Home</li>
          <li className='cursor-pointer' onClick={() => navigate('/introduce')}>Introduce</li>
          <li className='cursor-pointer' onClick={() => navigate('/skills')}>Skills</li>
          <li className='cursor-pointer' onClick={() => navigate('/project')}>Project</li>
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
          <GitLink to={'https://github.com/evejin9'} target='_blank'><AiFillGithub /></GitLink>
        </FooterGroup>
      </FooterStyle>
    </>
  );
}

export default Layout;
