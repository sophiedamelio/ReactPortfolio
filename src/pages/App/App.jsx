import './App.css';

import { Routes, Route } from "react-router-dom";

import HomePage from '../HomePage/HomePage'
import ItgDetail from '../ItgDetail/ItgDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FreelanceDetail" element={<ItgDetail />} />
      </Routes>
    </>
  );
}

export default App;
