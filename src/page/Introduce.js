import React from 'react';
import styled from 'styled-components';
import IntroduceCard from '../components/Introduce/IntroduceCard';

import introduceData from "../introduceData.json";

const IntroduceStyle = styled.div`
  height: 595px;
  background-color: #8EA7E9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Introduce(props) {
  return (
    <IntroduceStyle>
      { 
        introduceData.map(introduce => {
          return <IntroduceCard introduce={introduce} />
        })
      }
    </IntroduceStyle>
  );
}

export default Introduce;

