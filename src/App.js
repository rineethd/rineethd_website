import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Components/loader';
// import HomePage from './Components/homepage';
import AboutPage from './Components/about';


const AppContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  background-color: #0a192f;
`;

const Inline = styled.div`
  display: inline-block;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AppContainer>
      <Inline>
        {isLoading ? <Loader /> : <AboutPage />}
      </Inline>
    </AppContainer>
  );
};

export default App;