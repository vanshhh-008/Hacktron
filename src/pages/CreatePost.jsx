import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { FaDeleteLeft } from "react-icons/fa6";
import "./QuizForm.css";
import { RiAiGenerate } from "react-icons/ri";

// Main container styles
const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.2);
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
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  width: 640px; /* Set width to 640px */
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Center the container horizontally */

  @media (max-width: 768px) {
    width: 100%; /* For smaller screens, make it responsive */
    padding: 15px;
  }

  h1 {
    text-align: center;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: rgb(191, 64, 191);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: rgb(191, 64, 191);
  }
`;

const QuizContainer = styled.div`
  flex: 1;
  max-width: 100%;
  padding-left: 20px;
  margin-top: 20px; 

  pre {
    padding: 20px;
    border-radius: 8px;
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    border: 2px solid #ccc;
    background-color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: rgb(0,0,0,0.2);
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
  }

  pre {
    background-color: rgb(0,0,0,0.2);
    color: white;
    border: none;
  }

  button {
    background-color: rgb(191, 64, 191);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: rgb(155, 53, 155);
  }
`;

const QuizForm = () => {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [quiz, setQuiz] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); 

  const handleClear = () => {
    setTopic('');
    setDifficulty('');
    setNumQuestions('');
    setQuiz('');
    setError('');
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic || !difficulty || !numQuestions) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/generate-quiz', {
        topic,
        difficulty,
        numQuestions,
      });
      setQuiz(response.data.generatedContent);
      setError('');
      setShowModal(true); 
    } catch (err) {
      setError('Error generating quiz');
      console.error(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h1>Quiz Generator</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ marginBottom: '2%' }}>Enter Topic or Summary:</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter topic"
              />
            </div>
            <div>
              <label style={{ marginBottom: '2%', marginTop: '5%' }}>Difficulty:</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label style={{ marginBottom: '2%', marginTop: '5%' }}>Number of Questions:</label>
              <input
                type="number"
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                placeholder="Enter number of questions"
              />
            </div>
            <div className="d-flex justify-content-between gap-3">
              <button type="submit" style={{ width: '100%', marginTop: '5%' }}>
                <RiAiGenerate /> Generate Quiz
              </button>
              <button
                type="button"
                onClick={handleClear}
                style={{ width: '100%', marginTop: '5%' }}
              >
                <FaDeleteLeft /> Clear
              </button>
            </div>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </FormContainer>

       
      
      </Wrapper>

   
      {showModal && (
        <Modal>
          <ModalContent>
            <h2 style={{color:'black'}}>Generated Quiz Questions</h2>
            <pre>{quiz}</pre>
            <button onClick={() => setShowModal(false)}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default QuizForm;
