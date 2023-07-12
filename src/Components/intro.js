import React from 'react';
import styled from 'styled-components';


const Badge = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background-color: rgba(45, 212, 191, 0.1);
  color: rgb(94, 234, 212);
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  border-radius: 500px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-family: 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;

`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
  padding-left: 80px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
  }

`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgb(136, 146, 176);
  max-width: 600px;
  font-family: 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;


  @media (max-width: 768px) {
    margin-top: 20px;
    
  }
`;

const AboutText = styled.span`
  color: rgb(204, 214, 246);
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 30px;
  font-weight:600;
`;

const HighlightText = styled.span`
  color: rgb(204, 214, 246);
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 17px;
`;

const AboutGreenText = styled.span`
  color: rgb(94, 234, 212);
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 25px;
  padding-right:8px;
`;

const Intro = () => {
  return (
    <TextContainer>
      <TextContent>
        <AboutText><AboutGreenText>01.</AboutGreenText>About Me</AboutText>
        <br />
        With a deep love for crafting visually appealing and user-friendly interfaces, I thrive on turning complex problems into elegant solutions.
        <br />
        <br />
        My journey as a <HighlightText>software developer</HighlightText> began several years ago when I discovered my fascination with web technologies. Since then, I have dedicated myself to honing my skills in <HighlightText>front-end development</HighlightText>, constantly staying up-to-date with the latest trends and best practices in the industry.
        <br />
        <br />
        <HighlightText>Collaboration</HighlightText> and effective communication are values I hold dear. I enjoy working in agile teams, where I can contribute my creativity and problem-solving abilities to drive projects forward.
        <br />
        <br />
        <br></br>
        <Badge>Java</Badge>
        <Badge>Python</Badge>
        <Badge>TypeScript</Badge>
        <Badge>JavaScript</Badge>
        <Badge>Angular</Badge>
        <Badge>React.js</Badge>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        

    </TextContent>
    </TextContainer>
  );
};

export default Intro;
