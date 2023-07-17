import React from 'react';
import styled from 'styled-components';
import websiteImage from './Static/website.png';


const projects = [
  {
    id: 1,
    title: 'Rineeth Website',
    description: 'A Portfolio site built with React and Material-UI',
    image: websiteImage,
  },
  {
    id: 2,
    title: 'Another Project',
    description: 'Another project description',
    image: websiteImage,
  },
  {
    id: 3,
    title: 'Yet Another Project',
    description: 'Yet another project description',
    image: websiteImage,
  },
];

const ProjectContainer = styled.div`
  padding-left: 95px;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
  }
`;


const AboutText = styled.span`
  color: rgb(204, 214, 246);
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const AboutGreenText = styled.span`
  color: rgb(94, 234, 212);
  font-size: 25px;
  padding-right: 8px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 20px;
  width: 555px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -20px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  border: 1px solid rgba(204, 214, 246, 0.5);
  border-radius:4px;

  img {
    width: 140px;
    height: 85px;
  }

  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 60px;
    }
  }
`;


const ContentContainer = styled.div`
  margin-left: 20px;
`;

const Topic = styled.h5`
  color: rgb(204, 214, 246);
  font-size: 18px;
  margin-top: 1px;
`;

const Description = styled.p`
  color: rgb(136, 146, 176);
  font-size: 16px;
  margin-top: -3px;
`;

const Project = () => {
  return (
    <>
      <ProjectContainer>
        <AboutText>
          <AboutGreenText>03.</AboutGreenText>Projects
        </AboutText>
      </ProjectContainer>
      <br></br>
      {projects.map((project) => (
        <>
        <CardContainer key={project.id}>
          <ImageContainer>
            <img src={project.image} alt="" />
          </ImageContainer>
          <ContentContainer>
            <Topic>{project.title}</Topic>
            <Description>{project.description}</Description>
          </ContentContainer>
        </CardContainer>
        <br></br>
          <br></br>
        </>
      ))}

    </>
  );
};

export default Project;
