import React from 'react';
import ReactDOM from 'react-dom';
import navbarMedia from './NavbarMedia';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarMedia />, div);
  ReactDOM.unmountComponentAtNode(div);
});
