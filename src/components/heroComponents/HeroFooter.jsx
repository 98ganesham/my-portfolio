import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  HStack,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";
import {
  SiChakraui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const techIcons = [
  { icon: FaReact, label: "React", color: "blue.400" },
  { icon: SiTailwindcss, label: "TailwindCSS", color: "teal.400" },
  { icon: FaJsSquare, label: "JavaScript", color: "yellow.400" },
  { icon: FaNodeJs, label: "Node.js", color: "green.500" },
  { icon: SiNextdotjs, label: "Next.js", color: "#0070f3" },
  { icon: SiMongodb, label: "MongoDB", color: "green.700" },
  { icon: SiMysql, label: "MySQL", color: "blue.700" },
  { icon: SiChakraui, label: "Chakra UI", color: "teal.300" },
  { icon: FaBootstrap, label: "Bootstrap", color: "purple.500" },
  { icon: FaLaravel, label: "Laravel", color: "#FF2D20" },
];

export default function HeroFooter() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techIcons.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box as="footer" mt={20} w="100%" textAlign="center">
      <VStack spacing={16} w="100%">
        {/* Call to Action */}
        <Box maxW="3xl" w="full" p={8} bg="#87CEFA" rounded="2xl" shadow="md">
          <Heading size="xl" fontWeight="700" mb={4}>
            🚀 Let’s Build Something Amazing Together
          </Heading>
          <Text fontSize="md" color="gray.700" mb={6}>
            I love collaborating on impactful projects. Whether it's building a
            product, improving performance, or exploring creative solutions —
            let’s connect.
          </Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <a
              href="mailto:chawbelar98@gmail.com?subject=Let’s%20Collaborate"
              style={{ textDecoration: "none" }}
            >
              <Button
                size="lg"
                px={8}
                variant={"ghost"}
                color="white"
                _hover={{
                  bg: "#4682B4",
                  color: "white",
                  transform: "scale(1.05)",
                }}
                rounded="full"
              >
                ✉️ Email Me
              </Button>
            </a>
            <Link to="/project" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                px={8}
                variant={"ghost"}
                color="white"
                _hover={{
                  bg: "#4682B4",
                  color: "white",
                  transform: "scale(1.05)",
                }}
                rounded="full"
              >
                💻 See Projects
              </Button>
            </Link>
          </HStack>
        </Box>

        {/* Tech Stack */}
        <Box w="full" maxW="6xl">
          <Heading size="lg" mb={6}>
            ⚡ Technologies I Work With
          </Heading>
          <SimpleGrid
            columns={{ base: 3, sm: 4, md: 5, lg: 10 }}
            spacing={8}
            justifyItems="center"
            alignItems="center"
          >
            {techIcons.map((tech, i) => (
              <Tooltip
                label={tech.label}
                key={tech.label}
                hasArrow
                bg={tech.color}
              >
                <MotionBox
                  as={tech.icon}
                  w={12}
                  h={12}
                  color={tech.color}
                  animate={
                    i === activeIndex
                      ? { scale: 1.4, rotate: 10 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </Tooltip>
            ))}
          </SimpleGrid>
        </Box>

        {/* Blog Section */}
        <Box
          w="full"
          py={16}
          px={8}
          rounded="2xl"
          bgGradient="linear(to-r, #87CEFA, #b3e5fc)"
          textAlign="center"
          shadow="2xl"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
        >
          <VStack spacing={4}>
            <Heading
              size="xl"
              fontWeight="extrabold"
              color="black"
              lineHeight="shorter"
            >
              ✨ Explore My Blog
            </Heading>
            <Text fontSize="md" color="gray.700" maxW="2xl">
              I share insights on web development, personal experiments, and the
              latest trends. Stay inspired and grow with me on my{" "}
              <strong>Hero Blog</strong>.
            </Text>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                px={10}
                py={6}
                bg="#828282"
                color="white"
                _hover={{
                  bg: "#4682B4",
                  color: "white",
                  border: "2px solid white",
                }}
                rounded="full"
                transition="0.3s ease-in-out"
              >
                🚀 Read the Blog
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
