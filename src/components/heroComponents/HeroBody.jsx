import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { Link } from "react-router-dom";

import EcommerceImage from "../../assets/projectImages/eCommerce/hero_img.png";
import GymImage from "../../assets/projectImages/gym/HomePageGraphic.png";

const HeroBody = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-featured shopping experience with cart, checkout, and admin panel.",
      img: EcommerceImage,
      github: "https://github.com/98ganesham/eCommerce-frontend",
      demo: "https://dhl-fashora.netlify.app/",
    },
    {
      title: "Gym",
      description:
        "A modern fitness website designed to empower women through personalized training, community support, and motivation.",
      img: GymImage,
      github: "https://github.com/98ganesham/Gym",
      demo: "https://empowerhergym.netlify.app/",
    },
  ];

  return (
    <Box mt={{ base: 8, md: 12, lg: 15 }} maxW={"100%"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mb={12}
        width={"100%"}
      >
        <Heading fontSize="2xl">🚀 Recent Projects</Heading>
        <Link to="/project">
          <Button
            rightIcon={<FaArrowRight />}
            bg="#87CEFA"
            _hover={{ bg: "#828282" }}
            fontWeight="600"
            size="md"
          >
            View More
          </Button>
        </Link>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project, index) => (
          <Box
            key={index}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
            overflow="hidden"
          >
            <Image
              src={project.img}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h="fit"
              borderTopRadius="20px"
            />
            <Box p={4}>
              <Heading fontSize="lg" mb={2}>
                {project.title}
              </Heading>
              <Text fontSize="sm" color={textColor} mb={4}>
                {project.description}
              </Text>
              <Flex gap={4} wrap="wrap">
                <ChakraLink
                  as={Link}
                  to={project.github}
                  isExternal
                  display="flex"
                  alignItems="center"
                  fontSize="sm"
                  fontWeight="500"
                  color="teal.500"
                  _hover={{ textDecoration: "underline" }}
                  gap={2}
                >
                  <FaInfoCircle />
                  View Code
                </ChakraLink>

                <ChakraLink
                  as={Link}
                  to={project.demo}
                  isExternal
                  bg="#87CEFA"
                  color="black"
                  px={3}
                  py={1}
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="sm"
                  fontWeight="500"
                  _hover={{ bg: "#828282", color: "white" }}
                >
                  <BsPlay />
                  Live Demo
                </ChakraLink>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroBody;
