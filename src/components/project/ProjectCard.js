import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from "react-icons/ai";

const ProjectCardStyle = styled.div`
  width: 100%;
  padding: 30px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  word-wrap: break-word;

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
  }
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }
`;

const DetailPart = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  svg {
    width: 30px;
    color: red;
    margin-right: 5px;
  }

  p {
    word-wrap: break-word;
  }
`;

const DetailTitle = styled.div`
  margin-right: 20px;
  display: flex;
`;

function ProjectCard(props) {
  const { project : { title, picture, content, detail, skills, github, pageUrl,  } } = props;

  return (
    <ProjectCardStyle>
      <h3>{title}</h3>
      <div className='imgContent'>
        <img src={picture} />

      <DetailGroup>
        <p className='content'>{content}</p>
        <DetailPart>
          <DetailTitle>
            <AiFillPushpin />
            <p>주요 기능</p>
          </DetailTitle>
          <p>{detail}</p>
        </DetailPart>

        <DetailPart>
          <DetailTitle>
            <AiFillPushpin />
            <p>Github</p>
          </DetailTitle>
          <p>{github}</p>
        </DetailPart>

        <DetailPart>
          <DetailTitle>
            <AiFillPushpin />
            <p>PageUrl</p>
          </DetailTitle>
          <p>{pageUrl}</p>
        </DetailPart>

        <DetailPart>
          <DetailTitle>
            <AiFillPushpin />
            <p>Skills</p>
          </DetailTitle>
          {skills}
        </DetailPart>
      </DetailGroup>
      </div>

    </ProjectCardStyle>
  );
}

export default ProjectCard;