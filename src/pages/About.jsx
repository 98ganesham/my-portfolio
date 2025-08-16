import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Highlight,
  Divider,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaCode,
  FaCogs,
  FaInfinity,
  FaLightbulb,
  FaLaptopCode,
} from "react-icons/fa";
import PaddingBox from "../assets/frame/PaddingBox";
import Chaw_Be_Lar3 from "../assets/images/Chaw_Be_Lar3.jpg";

const About = () => {
  return (
    <PaddingBox>
      <Box mt={4} width={"100%"}>
        {/* Image + About Text */}
        <Flex
          direction={{ base: "column", md: "column", lg: "row" }}
          align="center"
          gap={12}
          mb={20}
        >
          {/* Developer Image */}
          <Box flexShrink={0} mt={10}>
            <Image
              src={Chaw_Be_Lar3}
              alt="Chaw Be Lar"
              borderRadius="2xl"
              boxSize={{ base: "260px", md: "320px" }}
              objectFit="cover"
              boxShadow="2xl"
            />
          </Box>

          {/* Bio Text */}
          <Box flex={1}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="semibold"
              fontFamily="monospace"
              lineHeight="short"
              mb={4}
            >
              Meet the Developer
            </Heading>

            <Text fontSize={{ base: "18px", md: "20px", lg: "22" }} mb={5}>
              I’m <strong>Chaw Be Lar</strong>, a full-stack web developer
              passionate about building fast, accessible, and beautiful digital
              products. My specialty lies in crafting responsive frontends and
              scalable backends with tools like the <strong>MERN Stack</strong>,
              <strong> Laravel</strong>, and more.
            </Text>

            <Text
              fontSize="md"
              lineHeight="1.8"
              letterSpacing="wide"
              mb={5}
              maxW="xl"
            >
              From seamless UI/UX experiences to rock-solid APIs, my stack
              includes <strong>React.js</strong>, <strong>Next.js</strong>,
              <strong> JavaScript</strong>, <strong>Node.js</strong>,
              <strong> MongoDB</strong>, <strong>MySQL</strong>,
              <strong> Chakra UI</strong>, <strong>Tailwind CSS</strong>, and
              more. I focus on writing maintainable, performance-optimized code
              with an eye for detail.
            </Text>

            <Text fontSize="md" maxW="xl">
              Beyond code, I value clarity, curiosity, and collaboration. I'm
              obsessed with clean UI, accessibility-first design, and delivering
              tech that solves real problems.
              <Divider my={4} borderColor="#87CEFA" />
              <Highlight
                query={["growth", "curiosity", "impact"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "#87CEFA",
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "medium",
                }}
              >
                My journey is powered by curiosity, growth, and a hunger for
                impact.
              </Highlight>{" "}
              As technology evolves, so do I — always iterating, always
              improving.
            </Text>
          </Box>
        </Flex>

        {/* Mission / Value Cards */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          textAlign={"center"}
          justify="center"
          mb={20}
        >
          {[
            {
              title: "Engineering Precision",
              desc: "Clean, maintainable code with attention to design — I balance aesthetics with architecture in every build.",
              icon: FaCode,
            },
            {
              title: "Future-Ready Thinking",
              desc: "I build with the future in mind: scalable, adaptable, and aligned with modern development standards.",
              icon: FaCogs,
            },
            {
              title: "Continuous Evolution",
              desc: "I invest in learning and sharpening my skills to stay ahead of the curve.",
              icon: FaInfinity,
            },
          ].map((card, index) => (
            <Box
              key={index}
              bg="#87CEFA"
              p={6}
              rounded="2xl"
              shadow="xl"
              color="black"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
            >
              <Icon as={card.icon} boxSize={6} mb={3} />
              <Heading as="h4" size="md" mb={3}>
                {card.title}
              </Heading>
              <Text fontSize="sm" lineHeight="1.7">
                {card.desc}
              </Text>
            </Box>
          ))}
        </Stack>

        {/* Vision Statement */}
        <Box textAlign="center" mt={16}>
          <Heading
            fontSize={{ base: "26px", md: "32px" }}
            fontWeight="bold"
            mb={4}
          >
            Vision for 2026 & Beyond
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" mx="auto">
            I see the future of web development as inclusive, immersive, and
            intelligent. I aim to contribute to that future by building
            human-centric digital tools that embrace accessibility, performance,
            and innovation. Whether it's with AI integration, real-time systems,
            or high-performance web apps — I'm here to push boundaries.
          </Text>
        </Box>

        {/* Skills Summary */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={20}>
          {[
            "React, Next.js, and Vite",
            "RESTful & GraphQL APIs",
            "MongoDB, MySQL,SQLite",
            "Laravel, Node.js, Express.js",
            "Figma, Framer Motion, UI/UX",
            "Git, GitHub & Deployment Pipelines",
          ].map((skill, idx) => (
            <Box
              _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
              key={idx}
              p={5}
              bg="#87CEFA"
              rounded="xl"
              shadow="md"
              color={"black"}
            >
              <Text fontWeight="medium" fontSize="md">
                {skill}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </PaddingBox>
  );
};

export default About;
