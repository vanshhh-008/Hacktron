import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { FaPencilAlt} from "react-icons/fa";
import axios from "axios";
import { RiAiGenerate } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";  
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = styled.div`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 15%;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 20%;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
`;

const StyledLazyImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Generateform = ({
  post,
  setPost,
  setCreatePostLoading,
  setGenerateImageLoading,
}) => {

 <Form>
  <ToastContainer position="top-right" autoClose={3000}/>
 </Form>
  const generateImageFun = async () => {
    if (!post.prompt) {
      toast.warn("Please provide a prompt!");
      return;
    }
    setGenerateImageLoading(true);
    toast.info("Generating image...");
   
    try {
      const response = await axios.post("http://localhost:4000/generate-image", {
        prompt: post.prompt,
      });

      if (response.data.success) {
        toast.success("Image generated successfully!");
        setPost({ ...post, photo: response.data.resultImage });
        
      } else {
        alert("Image generation failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("An error occurred while generating the image. Please try again.");
    } finally {
      setGenerateImageLoading(false);
    }
  };

  const createPostFun = () => {
    setCreatePostLoading(true);
    setPost({
      name: "",
      prompt: "",
      photo: "",
    });
  };

  

  return (
    <Form> 
       <ToastContainer position="top-right" autoClose={3000} />

      <Top>
  
    

        <Title>
          Generate Image With Text
          <Desc>Write any text to generate an image</Desc>
        </Title>
        <Body>
          <TextInput
            label="Author"
            placeholder="Enter Your Name"
            name="name"
            value={post.name}
            handelChange={(e) => setPost({ ...post, name: e.target.value })}
          />
          <TextInput
            label="Image Prompt"
            placeholder="Write Image Prompt to Generate"
            name="prompt"
            rows="8"
            textArea
            value={post.prompt}
            handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </Body>
        <ButtonContainer>
          <Button
            type="button"
            style={{ gap: "5px", marginTop: "5%" }}
            className="btn btn-primary"
            disabled={post.prompt === ""}
            onClick={generateImageFun}
          > <RiAiGenerate />
            Generate Image
          </Button>
          <Button
            type="button"
            className="btn btn-primary"
            style={{ gap: "5px", marginTop: "5%" }}
            disabled={post.name === "" || post.prompt === "" || post.photo === ""}
            onClick={createPostFun}
          >
            <FaPencilAlt /> Clear
          </Button>

        </ButtonContainer>
      </Top>

    
         
      
      
      
      
      
    </Form>
  );
};
