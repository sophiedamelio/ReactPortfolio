import './App.css';

import { Routes, Route } from "react-router-dom";

import HomePage from '../HomePage/HomePage'
import ItgDetail from '../ItgDetail/ItgDetail';

function App() {
  return (
    //<div className="App">
    //  <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
    //    <p>
    //      Edit <code>src/App.js</code> and save to reload.
    //    </p>
    //    <a
    //      className="App-link"
    //      href="https://reactjs.org"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      Learn React
    //    </a>
    //  </header>
    //</div>
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FreelanceDetail" element={<ItgDetail />} />
      </Routes>
    </>
  );
}

export default App;
