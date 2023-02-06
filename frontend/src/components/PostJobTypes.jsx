import { Heading, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export default function PostJobTypes() {
  const [job, setJob] = useState({
    title: "",
    text: "",
  });
  function handleChange(e) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  async function handleJobSubmit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/job", job);
    } catch (e) {
      console.log(e.message);
    }
    e.target.reset()
  }
  return (
    <form onSubmit={handleJobSubmit}>
      <Stack w="30%" m="auto" mt={"5%"} gap={"10px"}>
        <Heading>You can change jobs type from here...</Heading>
        <Input
        bg={"white"}
        color={"#111"}
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Enter job title"
        />
        <Input
        bg={"white"}
        color={"#111"}
          onChange={(e) => handleChange(e)}
          name="text"
          placeholder="Enter job description"
        />
        <Input
          transition={"1000ms"}
          _hover={{
            bg: "white",
            color: "#111",
          }}
          type="submit"
          value={"Submit"}
        />
      </Stack>
    </form>
  );
}
