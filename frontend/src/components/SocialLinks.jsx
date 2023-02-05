import React, { useState } from "react";
import { Heading, Input, Stack } from "@chakra-ui/react";

import { handleSubmit } from "../config/SocialSubmit";
import { SocialName } from "../config/SocialInput.js";
export default function SocialLinks() {
  const [social, setSocial] = useState({
    facebook: "",
    insta: "",
    linkedIn: "",
  });
  function handleLink(e) {
    setSocial({ ...social, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e,social)}>
      <Stack w="30%" m="auto" gap={"10px"}>
        <Heading fontSize={"2xl"}>Change Social icons links</Heading>
       
       {
        SocialName.map((e,i)=>(
          <Input
          key={i}
          onChange={(e) => handleLink(e,social)}
          name={e.name}
          bg={"white"}
          color={"#111"}
          type={"url"}
          placeholder={e.placeholder}
        />

        ))
       }
       
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
