import React from 'react';

class SymptomForm extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {};
  }


  render() {
  console.log(this.props)
  return (
    <div className="symptom">
      <input id="sym"></input>
    </div>

  )
}

}

export default SymptomForm;
