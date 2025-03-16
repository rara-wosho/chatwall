import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Message from "../pages/Message";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/message/:id" element={<Message />} />
    </Routes>
  );
};

export default Allroutes;
