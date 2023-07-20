import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Work from './work';
import Intro from './intro';
import Contact from './contact';
import Project from './projects';

const HomePageContainer = styled.div`
  display: flex;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const AboutContainer = styled.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
`;

const IntroContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(204, 214, 246);
  font-size: 45px;
  font-weight: 600;
  padding-left: 100px;
  padding-top: 100px;
  text-align: left; 

  @media (max-width: 1024px) {
    font-size: 38px;
    padding-left: 20px; 
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
    padding-top: 80px;
  }
`;


const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-top: 5px;
  color: rgb(136, 146, 176);
  max-width: 380px;
  padding-left: 100px;
  text-align: left; 
  word-break: break-word; 

  @media (max-width: 1024px) {
    width: calc(100% - 40px); 
    padding-left: 20px; 
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Subheading = styled.h3`
  margin-bottom: 5px;
  margin-top: 5px;
  color: rgb(204, 214, 246);
  font-size: 25px;
  font-weight: 600;
  padding-left: 100px;
  text-align: left; 

  @media (max-width: 1024px) {
    font-size: 20px;
    padding-left: 20px; 
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;



const Svg = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 30px;
  gap: 17px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-top: 20px;
    height: 20px;
    justify-content: flex-start;
  }
`;



const HorizontalLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  padding-left: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-left:30px;
  }
`;


const HorizontalLine = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isActive }) => (isActive ? '70px' : '35px')};
  height: 0.8px;
  margin: 20px 0;
  background-color: ${({ isActive }) => (isActive ? 'rgb(229, 231, 235)' : 'rgb(136, 146, 176)')};
  cursor: pointer;
  transition: width 0.3s ease-out, background-color 0.3s ease-out;

  &:hover {
    width: 70px;
    background-color: rgb(229, 231, 235);
  }
`;

const SectionName = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: ${({ isActive }) => (isActive ? '80px' : '50px')};
  color: ${({ isActive }) => (isActive ? 'rgb(229, 231, 235)' : 'rgb(136, 146, 176)')};
  cursor: pointer;
  transition: color 0.3s ease-out;

  &:hover {
    color: rgb(229, 231, 235);
  }
`;

const StyledButton = styled(Button)`
  color: rgb(94, 234, 212) !important;
  background-color: rgba(45, 212, 191, 0.1) !important;
  font-weight: 600;
  height:25px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AboutPage = () => {
  const handleButtonClicked = () => {
    window.open('https://drive.google.com', '_blank');
  };

  const gitIconClicked = () => {
    window.open('https://github.com/rineethd', '_blank');
  };

  const leetCodeIconClicked = () => {
    window.open('https://leetcode.com', '_blank');
  };

  const codeChefIconClicked = () => {
    window.open('https://codechef.com', '_blank');
  };

  const linkedInIconClicked = () => {
    window.open('https://www.linkedin.com/in/rineeth-devareddy-994586192/', '_blank');
  };

  const introRef = useRef(null);
  const workRef = useRef(null);
  const projectRef =useRef(null);
  const contactRef= useRef(null);

  const [activeLine, setActiveLine] = useState(1);

  const handleLineHover = (lineNumber) => {
    if (lineNumber !== activeLine) {
      setActiveLine(lineNumber);
    }
  };

  const handleLineClick = (lineNumber) => {
    setActiveLine(lineNumber);
    if (lineNumber === 1 && introRef.current) {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (lineNumber === 2 && workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (lineNumber === 3 && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (lineNumber === 4 && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomePageContainer>
      <AboutContainer>
        <Name>Rineeth Devareddy.</Name>
        <Subheading>Software Engineer at Digital Hoop</Subheading>
        <Paragraph>Passionate about elegant design and clean code. Love bringing ideas to life through thoughtful solutions.</Paragraph>
        <HorizontalLinesContainer>
          <HorizontalLine
            isActive={activeLine === 1}
            onMouseEnter={() => handleLineHover(1)}
            onClick={() => handleLineClick(1)}
          >
            <SectionName isActive={activeLine === 1}>ABOUT</SectionName>
          </HorizontalLine>
          <HorizontalLine
            isActive={activeLine === 2}
            onMouseEnter={() => handleLineHover(2)}
            onClick={() => handleLineClick(2)}
          >
            <SectionName isActive={activeLine === 2}>EXPERIENCE</SectionName>
          </HorizontalLine>
          <HorizontalLine
            isActive={activeLine === 3}
            onMouseEnter={() => handleLineHover(3)}
            onClick={() => handleLineClick(3)}
          >
            <SectionName isActive={activeLine === 3}>PROJECTS</SectionName>
          </HorizontalLine>
          <HorizontalLine
            isActive={activeLine === 4}
            onMouseEnter={() => handleLineHover(4)}
            onClick={() => handleLineClick(4)}
          >
            <SectionName isActive={activeLine === 4}>CONTACT</SectionName>
          </HorizontalLine>
        </HorizontalLinesContainer>

        <Svg>
          <Icon icon="mingcute:github-fill" color="#ccd6f6" width="26" height="26" onClick={gitIconClicked} />
          <Icon icon="mdi:linkedin" color="#ccd6f6" width="26" height="26" onClick={linkedInIconClicked} />
          {/*<Icon icon="simple-icons:leetcode" color="#ccd6f6" width="26" height="26" onClick={leetCodeIconClicked} />*/}
          {/*<Icon icon="simple-icons:codechef" color="#ccd6f6" width="26" height="26" onClick={codeChefIconClicked} />*/}
          <StyledButton onClick={handleButtonClicked}>Resume</StyledButton>
        </Svg>
      </AboutContainer>

      <IntroContainer>
        <div ref={introRef}>
          <Intro />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </IntroContainer>
    </HomePageContainer>
  );
};

export default AboutPage;
