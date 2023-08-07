import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ProjectCardStyle = styled.div`
  width: 100%;
  padding: 30px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  word-break: keep-all;

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  img {
    width: 60%;
  }

  .imgContent {
    display: flex;
    justify-content: center;
    align-items: center;

    /* 미디어쿼리 */
    /* flex-wrap: wrap; */
  }
`;

const ContentDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    line-height: 20px;
    margin: 50px 0;
    white-space: pre-wrap;
  }
`;

const DetailGroup = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  

  svg {
    width: 30px;
    color: red;
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
                <p><Link to={github} target='_blank'>Github</Link></p>
              </DetailTitle>
            </DetailGroup>

            <DetailGroup>
              <DetailTitle>
                <AiFillPushpin />
                <p><Link to={pageUrl} target='_blank'>PageUrl</Link></p>
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