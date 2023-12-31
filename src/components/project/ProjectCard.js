import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

const ProjectCardStyle = styled.div`
  width: 100%;
  padding: 40px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  word-break: keep-all;

  h3 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 50px;
  }

  img {
    width: 60%;
  }

  .imgContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 미디어쿼리 */
  @media screen and (max-width: 900px) {
    padding: 40px 25px;

    h3 {
      font-size: 25px;
    }

    .imgContent {
      flex-wrap: wrap;
    }

    img {
      width: 100%;
    }
  }
`;

const ContentDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  .content {
    font-size: 20px;
    line-height: 25px;
    margin: 50px 0;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 900px) {
    .content {
      font-size: 15px;
    }
  }
`;

const DetailGroup = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  

  svg {
    width: 30px;
    color: #E48586;
    margin-right: 5px;
  }

  p {
    line-height: 15px;
    word-wrap: break-word;
  }
`;

const DetailTitle = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PageLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: #7286D3;
  }
`;

function ProjectCard(props) {
  const { project : { title, picture, content, detail, skills, github, pageUrl,  } } = props;

  return (
    <ProjectCardStyle>
      <h3>{title}</h3>

      <div className='imgContent'>
        <img src={picture} />
        <ContentDetail>
          <p className='content'>{content}</p>
          <div>

            <DetailGroup>
              <DetailTitle>
                <AiFillPushpin />
                <p>주요 기능</p>
              </DetailTitle>
              <p>{detail}</p>
            </DetailGroup>
            <DetailGroup>
              <DetailTitle>
                <AiFillPushpin />
                <p><PageLink to={github} target='_blank'>Github</PageLink></p>
              </DetailTitle>
            </DetailGroup>

            <DetailGroup>
              <DetailTitle>
                <AiFillPushpin />
                <p><PageLink to={pageUrl} target='_blank'>PageUrl</PageLink></p>
              </DetailTitle>
            </DetailGroup>

            <DetailGroup>
              <DetailTitle>
                <AiFillPushpin />
                <p>Skills</p>
              </DetailTitle>
              {skills}
            </DetailGroup>
          </div>
        </ContentDetail>
      </div>
    </ProjectCardStyle>
  );
}

export default ProjectCard;