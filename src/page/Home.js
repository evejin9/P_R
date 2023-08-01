import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  height: 700px;
  `;

const BgGroup = styled.div` 
  height: 100%;
  display: flex;
  position: relative;

  .bg-left {
    background-color: #91C8E4;
    flex: 1
  };
  
  .bg-right {
    background-color: #F6F4EB;
    flex: 2
  };
`;

const ProfileCard = styled.div`
  width: 400px;
  height: 500px;
  background-color: darkblue;

  position: absolute;
  top: 0px;
  bottom: 0px;
  /* left: 0px; */
`;


function Home(props) {
  return (
    <HomeStyle>
      <BgGroup>
        <div className='bg-left'>g</div>
        <div className='bg-right'>g</div>

      <ProfileCard>
        ㅎㅎㅎㅇ
      </ProfileCard>
      </BgGroup>


    </HomeStyle>
  );
}

export default Home;