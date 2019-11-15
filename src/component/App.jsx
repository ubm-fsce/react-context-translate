import React from 'react';
import { throwStatement } from '@babel/types';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });

  }
  render() {
    return (
      <div className='ui container'>
        <div>
          Select Language :
        <i className='flag us' onClick={() => this.onLanguageChange('english')}></i>
          <i className='flag in' onClick={() => this.onLanguageChange('hindi')}> </i>
        </div >
        {this.state.language}
      </div>
    );
  }

}

export default App;