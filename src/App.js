import {
  HeaderMedia,
  NavbarMedia,
  FooterMedia
} from './views';
import React,{ Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMedia />
        <NavbarMedia />
        <FooterMedia />
      </div>
    );
  }
}

export default App;
