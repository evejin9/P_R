import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin } from "react-icons/ai";

import ProjectCard from '../components/project/ProjectCard';

import projects from "../projectData.json";

import dumpling from "../image/좋아할만두.png";
import falimyTalk from "../image/family-talk.png";
import portfolio from "../image/포트폴리오.png";

const ProjectStyle = styled.div`
  min-height: 700px;
  padding: 30px 0;
  background-color: #8EA7E9;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-weight: 700;
  };

  h4 {
    font-size: 23px;
  };
`;

const ProjectGroup = styled.div`
  margin: 50px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function Project(props) {
  return (
    <ProjectStyle>
      <h2>Project</h2>

      <ProjectGroup>
        {
          projects.map(project => {
            return <ProjectCard key={project.id} project={project} />
          })
        }
      </ProjectGroup>
    </ProjectStyle>
  );
}

export default Project;