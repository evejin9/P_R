import React from 'react';
import styled from 'styled-components';
import IntroduceCard from '../components/Introduce/IntroduceCard';

import introduceData from "../introduceData.json";

const IntroduceStyle = styled.div`
  min-height: 700px;
  background-color: #8EA7E9;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 40px;
  };

  h4 {
    font-size: 23px;
  };

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 30px;
      padding-bottom: 20px;
    }
  }
`;

const IntroduceCardArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function Introduce(props) {
  return (
    <IntroduceStyle>
      <h2>Introduce</h2>

      <IntroduceCardArea>
      { 
        introduceData.map(introduce => {

          return <IntroduceCard key={introduce.id} introduce={introduce} />
        })
      }

      
      </IntroduceCardArea>
    </IntroduceStyle>
  );
}

export default Introduce;

