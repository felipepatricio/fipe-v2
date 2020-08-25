import React, { ReactElement } from 'react';

import Form from './components/Form';
import styled from 'styled-components';
import background from './images/FipeLandingBg.jpg';

const AppElement = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  height: 731px;
  max-height: 800px;
  background: url(${background}) no-repeat;
  padding: 0 24px;
  flex-grow: 1;
`;

function App(): ReactElement {
  return (
    <AppElement>
      <React.StrictMode>
        <Form />
      </React.StrictMode>
    </AppElement>
  );
}

export default App;
