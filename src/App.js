import React from 'react';
import Formlogin from './pages/form-login';

const header = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
  padding: "20px"
}

class App extends React.Component {
  render (){
    return (
      <div>
        <span>
          <h1 style={header}>FORM LOGIN</h1>
        </span>
        <Formlogin />

      </div>
    )
  }
}

export default App;
