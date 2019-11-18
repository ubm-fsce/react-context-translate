import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { Badge, Row, Col } from 'reactstrap';


class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const name = this.context.language === 'English' ? 'Name  ' : 'Peru  ';
    return (
      <div >
        <Row>
          <Col xs="3" ><h5>  <label > {name}</label></h5></Col>
          <Col xs="9" ><input></input></Col>
        </Row>
      </div>
    );
  }

}

export default Field;