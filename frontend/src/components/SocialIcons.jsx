import {  IconButton,  Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export default function SocialIcons() {
  const [link, setLink] = useState({});
  useEffect(() => {
    GetLink();
  }, []);
  async function GetLink() {
    try {
      let { data } = await axios.get("http://localhost:8080/social");
      setLink(data[data.length - 1]);
    } catch (e) {
      console.log(e.message);
    }
  }
  const socialIcons = [
    {
      link: link?.facebook,
      icon: <BsFacebook color="#3b5998" size={"2rem"} />,
    },
    {
      link: link?.insta,
      icon: <GrInstagram color="red" size={"2rem"} />,
    },
    {
      link: link?.linkedIn,
      icon: <BsLinkedin color="#1DA1F2" size={"2rem"} />,
    },
  ];

  return (
    <Stack
      display={{ base: "none", md: "none", lg: "flex" }}
      h="auto"
      p="16px"
      w="5%"
      pos={"fixed"}
      gap={"20px"}
      left={"0"}
      top={"30vh"}
    >
      {socialIcons.map((e, i) => (
        <a key={i} href={e?.link} target="_blank">
          <IconButton  colorScheme={"transparent"} icon={e?.icon} />
        </a>
      ))}
    </Stack>
  );
}
