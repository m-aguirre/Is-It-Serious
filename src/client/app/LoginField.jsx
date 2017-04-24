import React from 'react';
//
const LoginField = () => (

  <div>
    Login:
    <input id="userName" />
    <button id='submitButton' onClick={() => alert('click')}>
      Submit
    </button>
      <button className="square" onClick={() => alert('click')}>
    {/* TODO */}
  </button>
  </div>

)

export default LoginField;
