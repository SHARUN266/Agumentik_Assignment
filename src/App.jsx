import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./pages/Home";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { particlesOptions } from "./config/TsConfig";
function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <Box bg={"#111"} color={"white"}>
      <Particles init={particlesInit} options={particlesOptions} />
      <Home />
    </Box>
  );
}

export default App;
