import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

import SocialIcons from "./components/SocialIcons";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import UserDetailsFrom from "./components/UserDetailsFrom";
import Admin from "./pages/Admin";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen()
    }, 30000);
  }, []);

  return (
    <Box bg={"#000"} color={"white"}>
      <Navbar />
      <UserDetailsFrom onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>

      <SocialIcons />
    </Box>
  );
}

export default App;
