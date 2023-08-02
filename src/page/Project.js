import React from 'react';
import styled from 'styled-components';

const ProjectStyle = styled.div`
  height: 595px;
  background-color: #8EA7E9;
`;

function Project(props) {
  return (
    <ProjectStyle>
      나는 프로젝트
    </ProjectStyle>
  );
}

export default Project;