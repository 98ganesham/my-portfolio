import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
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

  const handleExternalLink = (url) => (e) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
                <Link
                  to="#"
                  onClick={handleExternalLink(project.github)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#319795",
                    gap: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  <FaInfoCircle />
                  View Code
                </Link>

                <Link
                  to="#"
                  onClick={handleExternalLink(project.demo)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    backgroundColor: "#87CEFA",
                    color: "black",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.375rem",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#828282";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#87CEFA";
                    e.target.style.color = "black";
                  }}
                >
                  <BsPlay />
                  Live Demo
                </Link>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroBody;
