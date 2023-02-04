import { Box, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const socialIcons = [
  <BsFacebook color="#3b5998" size={"2rem"} />,
  <GrInstagram color="red" size={"2rem"} />,
  <BsTwitter color="#1DA1F2" size={"2rem"} />,
];
export default function SocialIcons() {
  return (
    <Stack
    display={{base:"none",md:"none",lg:"flex"}}
      h="auto"
      p="16px"
      w="5%"
      pos={"fixed"}
      gap={"20px"}
      left={"0"}
      top={"30vh"}
    >
        {
            socialIcons.map((e)=>(
                <IconButton colorScheme={'transparent'} icon={e} />
            ))
        }
       
    </Stack>
  );
}
