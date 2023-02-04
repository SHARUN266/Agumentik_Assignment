import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./pages/Home";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { particlesOptions } from "./config/TsConfig";
import SocialIcons from "./components/SocialIcons";
function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <Box bg={"#000"} color={"white"}>
      <Particles init={particlesInit} options={particlesOptions} />
      <Home />
      <SocialIcons/>
    </Box>
  );
}

export default App;
