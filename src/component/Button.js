import React from 'react';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from './../contexts/ColorContext';




class Button extends React.Component {
  renderSubmitValue(language) {
    return language === 'English' ? 'Submit' : 'Submit in telugu';
  }

  renderButton(color) {
    console.log("color ", color);
    return (
      <button className={`btn   ${color}`} >
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmitValue(language)}
        </LanguageContext.Consumer>
      </button >
    );
  }

  render() {
    return (
      <ColorContext.Consumer color='red'>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;