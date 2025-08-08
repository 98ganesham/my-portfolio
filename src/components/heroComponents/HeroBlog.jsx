import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPenNib, FaCode, FaRocket, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How I Built My First Portfolio Website",
    icon: FaCode,
    excerpt:
      "A deep dive into the tools, mistakes, and lessons I learned building my first developer portfolio.",
    link: "#",
    github: "https://github.com/98ganesham/HTML-CSS",
  },
  {
    title: "Understanding Flexbox: The Visual Guide I Wish I Had",
    icon: FaPenNib,
    excerpt:
      "CSS Flexbox can be confusing. Here's a simple, visual approach to mastering layout fundamentals.",
    link: "#",
    github: "https://github.com/98ganesham/CodeWithMosh-React",
  },
  {
    title: "30 Days of Code: What I Learned",
    icon: FaRocket,
    excerpt:
      "I committed to coding daily for a month. Here's what changed in my skills and mindset.",
    link: "#",
    github: null,
  },
];

const BlogCard = ({ title, icon, excerpt, github }) => {
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const handleGitHubRedirect = (e) => {
    e.preventDefault();
    window.open(github, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      bg={bg}
      p={6}
      rounded="2xl"
      shadow="lg"
      transition="all 0.3s"
      _hover={{ bg: hoverBg, transform: "translateY(-5px)" }}
    >
      <HStack spacing={4} mb={4} color="#87CEFA">
        <Icon as={icon} boxSize={6} />
        <Heading fontSize="xl">{title}</Heading>
      </HStack>
      <Text mb={4}>{excerpt}</Text>
      <HStack spacing={4}>
        {github && (
          <Link to="#" onClick={handleGitHubRedirect}>
            <Icon
              as={FaGithub}
              boxSize={6}
              color="gray.600"
              _hover={{ color: "#87CEFA" }}
            />
          </Link>
        )}
      </HStack>
    </Box>
  );
};

const HeroBlog = () => {
  return (
    <Box py={16}>
      <Container maxW="6xl">
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            📝 My Developer Blog
          </Heading>
          <Text fontSize="lg">
            Sharing what I learn, build, and discover as a junior web developer.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </SimpleGrid>

        <Box>
          <Link to="/">
            <Button mt={8} bg="#87CEFA">
              Back To Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBlog;
