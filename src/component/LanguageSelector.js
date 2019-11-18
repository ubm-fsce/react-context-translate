import React from 'react';
import { Button, ButtonGroup, Badge, Row, Col } from 'reactstrap';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  renderButtons(color) {
    return (
      <ButtonGroup size="sm">
        <Button outline color="primary" onClick={() => this.context.onLanguageChange('English')}>English</Button>
        <Button outline color="primary" onClick={() => this.context.onLanguageChange('Telugu')}>Telugu</Button>
      </ButtonGroup>
    );
  }

  render() {
    console.log(this.context);
    return (
      <Row>
        <Col xs="3"><h4> <Badge color="light">Please select Language !</Badge></h4></Col>
        <Col xs="4" > {this.renderButtons()} </Col>
        <Col xs="5">  </Col>
        {/*  <i className='flag us' onClick={() => this.context.onLanguageChange('English')}></i>
        <i className='flag in' onClick={() => this.context.onLanguageChange('Telugu')}> </i> */}
      </Row>

    );
  }

}

export default LanguageSelector;