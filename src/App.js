import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';

import './index.css';
import Routes from './route';
const AppContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
`}
`;
function App() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}

export default App;
