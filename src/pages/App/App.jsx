import './App.css';
import HomePage from '../HomePage/HomePage'
import ItgDetail from '../ItgDetail/ItgDetail';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FreelanceDetail" element={<ItgDetail />} />
      </Routes>
    </section>
  );
}

export default App;
