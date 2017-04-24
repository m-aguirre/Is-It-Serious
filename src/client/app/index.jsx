import React from 'react';
import {render} from 'react-dom';

import LoginField from './LoginField.jsx';
import Header from './Header.jsx';
import SymptomForm from './SymptomForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    clicked: false
  }


}

  render () {

    return (
    <div>
    <Header />
    <LoginField />
    </div>
    )

  }
}

render(<App/>, document.getElementById('app'));
//
