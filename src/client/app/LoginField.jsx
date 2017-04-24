import React from 'react';
//
const LoginField = () => (

  <div>
    Login:
    <input id="userName" />
    <button id='submitButton' onClick={() => {
        var text = document.getElementById('userName').value;
        document.getElementById('userName').value = '';
        alert(text)
      
      }
    }>
      Submit
    </button>

  </div>

)

export default LoginField;
