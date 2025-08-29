import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Projects from "./pages/Projects";
import "./index.css";
import Experience from "./pages/Experience";
import Thanku from "./pages/Thanku";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main App wrapper */}
    
          {/* Nested routes */}
          <Route path ="/" element={<Home />} />   {/* / */}
          <Route path="/academics" element={<Academics />} />  {/* /about */}
          <Route path="/projects" element={<Projects />} /> {/* /contact */}
          <Route path="/experience" element={<Experience/>}/>
           <Route path="/thanku" element={<Thanku/>}/>

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;