import React from 'react';

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
          <button id="symptomButton">Is it Srs?</button>
      </div>
    </div>

  )
}

}

export default SymptomForm;
