import React from 'react';
import { Route } from 'react-router-dom'
import Regist from './pages/registForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <Route path='/' component={Regist} exact />
    </div>  );
  }
}
 
export default App;