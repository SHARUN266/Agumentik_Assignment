import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

import SocialIcons from "./components/SocialIcons";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import UserDetailsFrom from "./components/UserDetailsFrom";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen()
    }, 10000);
  }, []);

  return (
    <Box bg={"#000"} color={"white"}>
      <Navbar />
      <UserDetailsFrom onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <SocialIcons />
    </Box>
  );
}

export default App;
