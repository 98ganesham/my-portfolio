import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
  VStack,
  Button,
  HStack,
  Icon,
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
import Chaw_Be_Lar from "../../assets/images/Chaw_Be_Lar.jpg";
import Chaw_Be_Lar2 from "../../assets/images/Chaw_Be_Lar2.jpg";
import Chaw_Be_Lar3 from "../../assets/images/Chaw_Be_Lar3.jpg";
import Chaw_Be_Lar4 from "../../assets/images/Chaw_Be_Lar4.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroCards = [
  {
    image: Chaw_Be_Lar,
    title: "Communicative",
    slogan: "Clear and timely collaboration with clients and teams.",
  },
  {
    image: Chaw_Be_Lar2,
    title: "Clean Code",
    slogan: "I write maintainable, readable, and scalable code.",
  },
  {
    image: Chaw_Be_Lar3,
    title: "Pixel Perfect",
    slogan: "Designs are implemented with high attention to detail.",
  },
  {
    image: Chaw_Be_Lar4,
    title: "Problem Solver",
    slogan: "I approach bugs and challenges with logic and creativity.",
  },
];
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
    }, 800);
    return () => clearInterval(interval);
  });

  return (
    <Box mt={20} as="footer">
      <VStack spacing={10} maxW="autoa">
        {/* Why Hire Me Heading */}
        <Heading size="2xl" fontWeight="500">
          Why Hire Me ?
        </Heading>

        {/* Card Grid */}
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={6}>
          {heroCards.map((card, index) => (
            <VStack
              key={index}
              bg="#87CEFA"
              rounded="xl"
              shadow="lg"
              p={4}
              spacing={4}
              textAlign="center"
            >
              <Image
                src={card.image}
                alt={card.slogan}
                border="none"
                borderRadius="xl"
                boxShadow={"2xl"}
                boxSize="200px"
                objectFit="cover"
                _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
              />
              <Heading fontWeight={"bold"} color="black" fontSize={"16px"}>
                {card.title}
              </Heading>
              <Text fontSize={"14px"} fontWeight={"700"} color="gray.500">
                {card.slogan}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Contact Card */}
        <Box
          width={"full"}
          bg="#87CEFA"
          color="black"
          p={8}
          rounded="2xl"
          textAlign="center"
        >
          <Heading size="lg" mb={4}>
            Interested Working With Me?
          </Heading>
          <HStack spacing={4} justify="center">
            <Link
              href="mailto:chawbelar98@gmail.com?subject=Interested%20in%20Working%20Together"
              isExternal
              style={{ textDecoration: "none" }}
            >
              <Button
                bgColor="#828282"
                _hover={{
                  bg: "#1877F2",
                  border: "2px solid #87CEFA",
                  color: "#222222",
                }}
              >
                Email Me
              </Button>
            </Link>
            <Link href="/projects" style={{ textDecoration: "none" }}>
              <Button
                bgColor="#828282"
                _hover={{
                  bg: "#1877F2",

                  border: "2px solid #87CEFA",
                  color: "#222",
                }}
              >
                See More Projects
              </Button>
            </Link>
          </HStack>
        </Box>

        {/* Tech Icons */}
        <VStack spacing={4} mt={8} width={"full"} p={8} textAlign="center">
          <Heading size="lg" fontWeight="bold">
            Technologies I Have Experience With
          </Heading>
          <SimpleGrid
            columns={{ base: 3, sm: 4, md: 5, lg: 10 }}
            spacing={6}
            width="full"
            mt={4}
            pt={2}
            alignItems="center"
            justifyItems="center"
          >
            {techIcons.map((tech, i) => (
              <Tooltip
                label={tech.label}
                hasArrow
                bg={tech.color}
                key={tech.label}
              >
                <MotionBox
                  as={tech.icon}
                  placeholder={tech.label}
                  w={12}
                  h={12}
                  color={tech.color}
                  animate={
                    i === activeIndex
                      ? {
                          scale: 1.4,
                          boxShadow: "0px 0px 0px rgba(0,0,0,1.2)",
                        }
                      : { scale: 1, boxShadow: "none" }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  }}
                />
              </Tooltip>
            ))}
          </SimpleGrid>
        </VStack>
        {/* Testimonial-style Personal Card */}
        <Box width={"full"} p={8} rounded="2xl" textAlign="center">
          <Heading size="md" fontWeight={"900"} mb={4}>
            Loved by Users & Collaborators
          </Heading>
          <Text fontWeight={"600"}>
            Building personal connections through code. I focus on quality,
            clarity, and user-first design — whether it’s a solo project or a
            collaboration.
          </Text>
        </Box>
        {/* Blog CTA Section – Elevated 2025 Design */}
        <Box
          w="full"
          py={16}
          px={8}
          rounded="2xl"
          bgGradient="linear(to-r, #87CEFA, #b3e5fc)"
          textAlign="center"
          shadow="2xl"
          mt={10}
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
        >
          <VStack spacing={4}>
            <Heading
              size="xl"
              color="black"
              fontWeight="extrabold"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              🚀 Dive Into the Hero Blog
            </Heading>
            <Text fontSize="md" color="gray.700" maxW="2xl">
              Stay ahead of the curve. Discover real-world dev stories,
              experiments, and web trends in the <strong>Hero Blog</strong>.
              It's where I document growth, learning, and creativity in code.
            </Text>
            <Link to="/blog">
              <Button
                size="lg"
                px={10}
                py={6}
                bg="#828282"
                _hover={{
                  bg: "#1877F2",
                  color: "black",
                  border: "2px solid black",
                }}
                borderRadius="full"
                transition="0.3s ease-in-out"
              >
                ✨ Explore Hero Blog
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
