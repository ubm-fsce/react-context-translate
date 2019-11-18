import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './../contexts/LanguageContext';
import ColorContext from './../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import { Badge, Container, Row, Col } from 'reactstrap';

class App extends React.Component {

  render() {
    return (
      <Container>
        <LanguageStore>
          <LanguageSelector></LanguageSelector>
          <ColorContext.Provider value='btn-danger'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </Container >
    );
  }
}

export default App;