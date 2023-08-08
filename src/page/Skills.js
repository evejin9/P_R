import React from 'react';
import styled from 'styled-components';

const SkillsStyle = styled.div`
  min-height: 700px;
  padding: 30px 0;
  background-color: #8EA7E9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 40px;
  };

  h4 {
    font-size: 23px;
    padding: 20px;
  };

  li {
    padding: 10px;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 30px;
      padding-bottom: 30px;
    }

    h4 {
      padding: 10px;
      margin: 20px 0;
    }
  }
`;

const SkillsGroup = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const SkillsPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
  }

  h4:after {
    content: "";
    display: block;
    width: 30px;
    margin: 20px auto;
    border-bottom: 2px solid #7286D3;
  }
`;

function Skills(props) {
  return (
    <SkillsStyle>
      <h2>Skills</h2>

      <SkillsGroup>
        <SkillsPart>
          <h4>Front-End</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Axios</li>
            <li>Redux</li>
            <li>Styled-Components</li>
          </ul>
        </SkillsPart>

        <SkillsPart>
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>VS Code</li>
            <li>Netlify</li>
            <li>Figma</li>
          </ul>
        </SkillsPart>
      </SkillsGroup>
    </SkillsStyle>
  );
}

export default Skills;