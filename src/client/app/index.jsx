import React from 'react';
import {render} from 'react-dom';

import LoginField from './LoginField.jsx';
import Header from './Header.jsx';

class App extends React.Component {
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
