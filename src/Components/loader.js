import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Triangle } from 'react-loader-spinner';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #0a192f;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

`;

const TriangleLoader = styled(Triangle)`
  margin: 0 auto;
`;

const LoaderText = styled.span`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(94, 234, 212);
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <TriangleLoader height={200} width={200} color="rgb(94, 234, 212)" ariaLabel="triangle-loading" visible={true} />
        <LoaderText>RD</LoaderText>
      </LoaderContainer>
    );
  }

  return null;
};

export default Loader;
