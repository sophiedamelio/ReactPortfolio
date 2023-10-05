import './App.css';
//import HomePage from '../HomePage/HomePage'
//import ItgDetail from '../ItgDetail/ItgDetail';

import { Routes, Route } from "react-router-dom";


//to do:
// edit the view resume link to be the correct resume
//from 610 pixels and below, media query and fix spacing when resizing smaller whole navbar


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
