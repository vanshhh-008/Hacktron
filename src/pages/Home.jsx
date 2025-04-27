import React from "react";
import styled from "styled-components";
import "./home.css";

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.1);
  padding: 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  margin: 20px 0;
`;

const Title = styled.h1`
  font-family: "Audiowide", cursive;
  font-size: 2.5rem;
  color: #4CAF50;
`;

const Subtitle = styled.h2`
  color: ${(props) => props.color || "#333"};
  font-size: 2rem;
  margin: 20px 0 10px;
`;

const Text = styled.p`
  color: ${(props) => props.color || "#555"};
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
`;

export const Home = () => {
  return (
    <Container>
      <div className="Heading">
        <Title>
          Explore How AI Generates Quiz Questions <br />
          <span style={{ color: "#00BCD4" }}>► Smart, Fast, and Dynamic ◄</span>
        </Title>
      </div>

      <Section>
        <Subtitle color="#2196F3">What is it?</Subtitle>
        <Text color="#333">
          An <strong>AI Quiz Generator</strong> automatically creates quiz questions based on the selected <strong>category</strong> and <strong>topic</strong>. It uses intelligent algorithms to ensure that the questions are relevant, challenging, and varied.
        </Text>
      </Section>

      <Section>
        <Subtitle color="#FF9800">How Does It Work?</Subtitle>
        <Text>
          <strong>1. Choose a Category:</strong> Pick a broad area like <em>Science</em>, <em>History</em>, or <em>Technology</em>.<br/><br/>
          <strong>2. Select a Topic:</strong> Narrow it down to something specific like <em>Physics</em> or <em>World War II</em>.<br/><br/>
          <strong>3. Set Difficulty:</strong> Decide if the quiz should be <em>Easy</em>, <em>Medium</em>, or <em>Hard</em>.<br/><br/>
          <strong>4. Generate Questions:</strong> AI instantly creates questions like Multiple Choice, True/False, and Short Answer formats.
        </Text>
      </Section>

      <Section>
        <Subtitle color="#E91E63">Key Features</Subtitle>
        <Text>
          ✅ <strong>Custom Categories and Topics</strong><br/>
          ✅ <strong>Adjustable Difficulty Levels</strong><br/>
          ✅ <strong>Randomized Question Formats</strong><br/>
          ✅ <strong>Instant Question Generation</strong><br/>
          ✅ <strong>Smart Content Understanding</strong>
        </Text>
      </Section>

      <Section>
        <Subtitle color="#9C27B0">Why Use This AI?</Subtitle>
        <Text>
          🧠 <strong>Smart and Adaptive</strong>: Understands your needs.<br/>
          ⏳ <strong>Time Saving</strong>: No manual question writing.<br/>
          📚 <strong>Wide Knowledge Coverage</strong>: From school topics to advanced studies.
        </Text>
      </Section>

      <Section>
        <Subtitle color="#00BCD4">Example</Subtitle>
        <Text>
          Create a quiz in the <em>History</em> category with the topic <em>World War II</em> at <em>Medium difficulty</em> — and get 20+ tailored questions instantly!
        </Text>
      </Section>
    </Container>
  );
};
