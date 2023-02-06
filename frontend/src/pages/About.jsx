import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";



export default function About() {
  const [jobType,setJobType]=useState([])
  useEffect(()=>{
    FetchJobType()
  },[])
  async function FetchJobType(){
    try{
      let {data}=await axios.get("http://localhost:8080/job")
      setJobType(data)

    }catch(e){
      console.log(e.message)
    }

  }
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={"auto"}>
      <Box mt="5%" p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Find Your Job Category</Heading>
          <Text color={"fontColor"} fontSize={"xl"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {jobType?.map((feature) => (
              <HStack key={feature._id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"fontColor"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
        <Box mt="10%" position={"relative"}>
          <Flex
            flex={1}
            zIndex={0}
            display={{ base: "none", lg: "flex" }}
            backgroundImage="url('/templates/stats-grid-with-image.png')"
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position={"absolute"}
            width={"50%"}
            insetY={0}
            right={0}
          >
            <Flex
              bgImage={
                "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
              }
              objectFit={"cover"}
              bgSize={"cover"}
              w={"full"}
            
              h={"full"}
            />
          </Flex>
          <Container maxW={"7xl"} zIndex={10} position={"relative"}>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Stack
                flex={1}
                color={"gray.400"}
                justify={{ lg: "center" }}
                py={{ base: 4, md: 20, xl: 60 }}
              >
                <Box mb={{ base: 8, md: 20 }}>
                  <Text
                    fontFamily={"heading"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    mb={3}
                    fontSize={"xl"}
                    color={"gray.500"}
                  >
                    Technology
                  </Text>
                  <Heading
                    color={"white"}
                    mb={5}
                    fontSize={{ base: "3xl", md: "5xl" }}
                  >
                    21st century agriculture
                  </Heading>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    The NewLife™ technology allows you to monitor your crops and
                    get complete insights at real time. The proprietary
                    software/hardware ecosystem prevents your plants from
                    getting neglected.
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      <Text
                        fontFamily={"heading"}
                        fontSize={"3xl"}
                        color={"white"}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                      <Text fontSize={"xl"} color={"gray.400"}>
                        {stat.content}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
