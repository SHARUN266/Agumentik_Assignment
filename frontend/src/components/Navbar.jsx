import {
  Box,
  Flex,
  HStack,
  Text,
  
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Links = ["Home", "How it works", "Features", "Contact Us"];

const NavLink = ({ children }) => (
  <Link
   
   to={"/about"}
  >
    <Text px={2}
    py={1}
    fontSize={18}
    fontWeight={400}
    transition={"500ms"}
    _hover={{
      color: "blueColorCode",
    }}>
  {children}
    </Text>
  
  </Link>
);
const style = {
  backgroundColor: "#ffffff11",

  backdropFilter: "blur(20px)",
  webkitBackdropFilter: "blur(50px)",
  boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.2)",
};

export default function Navbar() {
  const [flag, setFlag] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > 150) {
      setFlag(true);
    }
    if (y < 50) {
      setFlag(false);
    }
  });

  return (
    <Box
    zIndex={100}
      style={flag ? style : { bg: "#111" }}
      transition={"1000ms"}
      pos={"sticky"}
      top={"0"}
    >
      <Box
        w={["95%", "100%", "80%"]}
        h={["5vh", "10vh", "15vh"]}
        m="auto"
        px={4}
      >
        <Flex h={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            colorScheme={"transparent"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
            <Flex alignItems={"center"}>
              {" "}
              <Heading fontSize={25}>Galactic</Heading>{" "}
              <Text fontSize={25}>Jobs</Text>{" "}
            </Flex>
            </Link>
            
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              color={"fontColor"}
              bgColor={"blueColorCode"}
              _hover={{
                bg: "blueColorCode",
              }}
              size={["sm", "md", "lg"]}
              borderRadius={"50px"}
              shadow={"md"}
            >
            Admin Login
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
