import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import '../style.scss';
import Welcome from './welcome';
import Fractionalize from './fractionalize';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/fractionalize" element={<Fractionalize />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);

export default App;
