import './App.css';
import HomePage from '../HomePage/HomePage.jsx'
import ItgDetail from '../ItgDetail/ItgDetail';

import { Routes, Route } from "react-router-dom";


//to do:
//all media queries - header text spacing and wrap fixed
//all media queries - nav menu fixed
//all media - certification images fixed
//mobile, tablet, maybe desktop - text on CTA wrapped (ref: card CTAs)
//update photo?
//have return to top of page only show up when not at top of page
//make scroll to top accessible
//accessibility audit on whole site
//make email in contact section a link for gmail?



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
