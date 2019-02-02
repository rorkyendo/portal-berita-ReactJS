import {
  HeaderMedia,
  NavbarMedia
} from './views';
import React,{ Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMedia />
        <NavbarMedia />
      </div>
    );
  }
}

export default App;
