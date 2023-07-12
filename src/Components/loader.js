import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust this to 100% to cover the full viewport height */
  width: 100vw; /* Adjust this to 100% to cover the full viewport width */
  background-color: #020c1b;
`;

const animateFade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const LoaderText = styled.span`
  color: #64ffda;
  font-size: 50px;
  font-weight: bold;
  animation: ${animateFade} 2s linear infinite;

  @keyframes ${animateFade} {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

const Loader = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const name = 'Rineeth Devareddy';

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(name.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === name.length) {
        clearInterval(intervalId);
      }
    }, 100); // Set the interval to 100 milliseconds (0.1 second)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <LoaderContainer>
      {displayedText.split('').map((char, index) => (
        <LoaderText key={index}>{char}</LoaderText>
      ))}
    </LoaderContainer>
  );
};

export default Loader;
