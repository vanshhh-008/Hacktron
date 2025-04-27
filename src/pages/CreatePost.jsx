import React, { useState } from 'react';
import styled from "styled-components";




const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: rgb(0,0,0,0.2);
  padding: 10px 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  height: fit-content;
  width: 100%;
  max-width: 1200px;
  gap: 8%;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


 

export const CreatePost = () => {
  


  return (
    <>
    <Container>
  <Wrapper>
       
       
         
      
      </Wrapper>
    </Container>
    </>
  );
};
