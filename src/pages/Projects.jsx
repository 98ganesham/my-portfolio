// Project.jsx

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Link,
  VStack,
  List,
  ListItem,
  Icon,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaCheckCircle } from "react-icons/fa";
import { projects } from "../helper/projects";
import PaddingBox from "../assets/frame/PaddingBox";

// Project Intro Section
const ProjectIntro = () => (
  <Box mb={10}>
    <Heading
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      fontWeight="semibold"
      fontFamily="monospace"
      lineHeight="short"
      mb={4}
    >
      My Projects
    </Heading>

    <Text fontSize="md">
      Over the past two years, I have dedicated myself to building this suite of
      full-stack and frontend applications as part of a personal learning
      journey and portfolio development. Each project reflects increasing
      complexity and a growing mastery of React, modern UI libraries, state
      management, and backend integrations.
      <br />
      <br />
      These projects are not just demos — they are designed as real-world
      scalable solutions. While I’ve highlighted my three biggest projects below
      (Gym, E-Commerce, and Hospital Booker), I have also created several
      smaller projects like a Calculator App, To-Do List, Weather App, and more
      to sharpen specific technical skills.
    </Text>
  </Box>
);

// Single Project Card (Modern Design)
const ProjectCard = ({ project }) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      p={6}
      shadow="lg"
      transition="all 0.4s ease"
      _hover={{
        transform: "translateY(-6px)",
        shadow: "2xl",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px solid rgba(135, 206, 250, 0.5)" // sky blue border
    >
      {/* Image */}
      <Box
        mb={4}
        borderRadius="lg"
        overflow="hidden"
        height="auto"
        position="relative"
      >
        <Image
          src={project.image}
          alt={project.name}
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="lg"
        />
      </Box>

      {/* Text & Info */}
      <VStack align="start" spacing={3} flex={1}>
        <Heading size="md">{project.name}</Heading>

        <Text fontSize="sm">
          <strong>Languages: {project.languages.join(", ")}</strong>
        </Text>
        <Text fontSize="sm">
          <strong>UI Libraries:</strong> {project.ui}
        </Text>
        <Text fontSize="sm">
          <strong>Tools:</strong>{" "}
          {project.tools ? project.tools.join(", ") : "—"}
        </Text>

        <Box mt={2}>
          <Text fontWeight="semibold" fontSize="sm" mb={1}>
            Key Features:
          </Text>
          <List spacing={2} pl={1}>
            {project.features.map((feature, i) => (
              <ListItem key={i} display="flex" alignItems="center">
                <Icon as={FaCheckCircle} color="#87CEFA" mr={2} />
                <Text fontSize="sm">{feature}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>

      {/* GitHub Button */}
      <Link
        href={project.github}
        isExternal
        mt={4}
        display="inline-flex"
        alignItems="center"
        color="#4682B4"
        fontWeight="bold"
        _hover={{ textDecoration: "underline" }}
      >
        <Icon as={FaGithub} mr={2} /> View on GitHub
      </Link>
    </Box>
  );
};

// Main Component
const Project = () => {
  return (
    <PaddingBox>
      <Container maxW="100%" mt={6}>
        <ProjectIntro />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </PaddingBox>
  );
};

export default Project;
