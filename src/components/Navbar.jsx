import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Home", "How it works", "Features", "Contact Us"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    fontSize={18}
    fontWeight={400}
    transition={"500ms"}
    _hover={{
      color: "blueColorCode",
    
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w={["95%", "100%", "80%"]}
        h={["10vh", "15vh", "20vh"]}
        m="auto"
        px={4}
      >
        <Flex h={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems={"center"}>
              {" "}
              <Heading fontSize={25}>Galactic</Heading>{" "}
              <Text fontSize={25}>Jobs</Text>{" "}
            </Flex>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex  alignItems={"center"}>
            <Button
              color={"fontColor"}
              bgColor={"blueColorCode"}
              _hover={{
                bg:'blueColorCode'
              }}
              size={["sm","md","lg"]}
              borderRadius={"50px"}
              shadow={'md'}
            >
              Read more
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
    </>
  );
}
