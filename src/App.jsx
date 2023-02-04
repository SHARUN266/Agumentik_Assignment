import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./pages/Home";

import SocialIcons from "./components/SocialIcons";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
function App() {
 

  return (
    <Box bg={"#000"} color={"white"}>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
     </Routes>
      
      <SocialIcons/>
    </Box>
  );
}

export default App;
