import React from 'react'
import styled from 'styled-components';
import {LazyLoadImage} from "react-lazy-load-image-component";


const Card = styled.div`
position:relative;
display:flex;
flex-direction:column;
border-radius:20px;
box-shadow:1px 2px 40px 8px ${({theme})=>theme.black + 60};
cursor:pointer;
transition:all 0.3s ease;
&:hover{
box-shadow:;1px 2px 3px 40px 8px ${({theme})=>theme.black + 60};
scale:1.05;

}
`;

const StyledImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 300px; 
  height: auto;
  object-fit: cover; 
  border-radius: 15px;
`;
const HoverOverlay = styled.div`
opsacity:0;
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
flex-direction:column;
align-items:start;
gap:2px;
transition:opacity 0.3s ease; 
padding:16px;

`;
const Prompt = styled.div`

font-weight:400px;
font-size:15px;
color:${({theme})=>theme.white};
`;
const Author = styled.div`
font-weight:600px;
font-size:14px;
display:flex; 
gap:8px;
align-items:center;

color:${({theme})=>theme.white};

`;
export const ImageCard = ({item}) => {
  
  return (
   
    <>
    <Card>
    <StyledImage
        src={item?.photo}
        alt="AI Generated"
      />

       
        
   

      
       
    </Card>
    </>
  )
}
