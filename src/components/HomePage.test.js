import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage'

describe("Home Page tests", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePage />, div);
      });

   
})