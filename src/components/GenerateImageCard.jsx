import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FileSaver from "file-saver";
import { DownloadRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 24px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GenerateImageCard = ({ src, loading, post, setPost }) => {
  const downloadImage = () => {
    if (src) {
      FileSaver.saveAs(src, "Generated-Image.jpg");
    } else {
      console.warn("No image source available for download.");
    }
  };

  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Loading...
        </>
      ) : src ? ( 
        <>
          <ImageContainer>
            <Image src={src} alt="Generated" />
            
          </ImageContainer>
          <DownloadRounded
            onClick={downloadImage}
            style={{
              color: "white",
              backgroundColor: "black",
              height: "50px",
              width: "50px",
              cursor: "pointer",
              borderRadius: "50%",
              padding: "8px",
            }}
            titleAccess="Download Image"
          />
         
           
         
        </>
      ) : (
        <>Write text to generate an image</>
      )}
    </Container>
  );
};
