import React from 'react';
import {render} from 'react-dom';

import ChillMessage from './ChillMessage.jsx'

class SymptomForm extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {};
  }


  render() {
  return (
    <div className="symptom">
        <div className="symptomFieldDiv">
          <input id="sym"></input>
          <button id="symptomButton" onClick={() => {
              alert('Nah, Chill Bruh')
      
            }
          }>Is it Srs?</button>
      </div>
    </div>

  )
}

}

export default SymptomForm;
