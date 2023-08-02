import React from 'react';
import styled from 'styled-components';

const IntroduceCardStyle= styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  /* border: 1px solid #000; */
  border-radius: 8px;
  padding: 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  h3:after {
    content: "";
    display: block;
    width: 30px;
    margin: 20px auto;
    border-bottom: 2px solid #7286D3;
  }

  p {
    padding-top: 20px;
    flex: 1;
    word-wrap: break-word;
  }
`;

function IntroduceCard(props) {
const { title, content } = props; 

  return (
    <IntroduceCardStyle>
      <h3>{title}</h3>
      <p>{content}</p>
    </IntroduceCardStyle>
  );
}

export default IntroduceCard;