import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { Link } from "react-router-dom";

import EcommerceImage from "../../assets/projectImages/eCommerce/hero_img.png";
import GymImage from "../../assets/projectImages/gym/HomePageGraphic.png";

const HeroBody = () => {
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
    <Box mt={{ base: 8, md: 12, lg: 16 }}>
      {/* Section Header */}
      <Flex justify="space-between" align="center" mb={12} flexWrap="wrap">
        <Heading fontSize={{ base: "xl", md: "2xl" }}>
          🚀 Recent Projects
        </Heading>
        <Link to="/project">
          <Button
            rightIcon={<FaArrowRight />}
            bg="#87CEFA"
            _hover={{ bg: "#4682B4", color: "white" }}
            fontWeight="600"
            size="md"
            mt={{ base: 4, md: 0 }}
          >
            View More
          </Button>
        </Link>
      </Flex>

      {/* Project Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "translateY(-6px)" }}
            overflow="hidden"
            minH="440px" // equal card height
            display="flex"
            flexDirection="column"
          >
            {/* Image */}
            <Box
              h="220px"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.50"
            >
              <Image
                src={project.img}
                alt={project.title}
                objectFit="contain" // show entire image, not cropped
                maxH="100%"
                maxW="100%"
              />
            </Box>

            {/* Content */}
            <Box flex="1" p={5} display="flex" flexDirection="column">
              <Heading fontSize="lg" mb={2}>
                {project.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                {project.description}
              </Text>

              {/* Actions */}
              <Flex gap={4} mt="auto" wrap="wrap">
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  leftIcon={<FaInfoCircle />}
                  variant="outline"
                  size="sm"
                  fontWeight="500"
                  _hover={{ bg: "#4682B4", borderColor: "#f7f7f7" }}
                >
                  View Code
                </Button>
                <Button
                  as="a"
                  href={project.demo}
                  target="_blank"
                  leftIcon={<BsPlay />}
                  bg="#87CEFA"
                  size="sm"
                  fontWeight="600"
                  _hover={{ bg: "#4682B4", color: "white" }}
                >
                  Live Demo
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroBody;
