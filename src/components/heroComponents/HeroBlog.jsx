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
  Divider,
} from "@chakra-ui/react";
import {
  FaPenNib,
  FaCode,
  FaRocket,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How I Built My First Portfolio Website",
    icon: FaCode,
    excerpt:
      "From idea to deployment — the exact steps, tools, and lessons that shaped my journey into professional web development.",
    link: "#",
    github: "https://github.com/98ganesham/HTML-CSS",
  },
  {
    title: "Understanding Flexbox: The Visual Guide I Wish I Had",
    icon: FaPenNib,
    excerpt:
      "Forget the jargon. A clear, visual explanation of Flexbox with real-world use cases you can apply today.",
    link: "#",
    github: "https://github.com/98ganesham/CodeWithMosh-React",
  },
  {
    title: "30 Days of Code: What I Learned",
    icon: FaRocket,
    excerpt:
      "One month, one challenge: coding every day. The growth, struggles, and how consistency builds real skill.",
    link: "#",
    github: null,
  },
];

const BlogCard = ({ title, icon, excerpt, github, link }) => {
  const bg = useColorModeValue("white", "gray.900");

  const handleGitHubRedirect = (e) => {
    e.preventDefault();
    window.open(github, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      bg={bg}
      p={8}
      rounded="2xl"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-8px)", shadow: "2xl" }}
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <HStack spacing={4} mb={4} color="#87CEFA">
          <Icon as={icon} boxSize={6} />
          <Heading fontSize="xl">{title}</Heading>
        </HStack>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
          {excerpt}
        </Text>
      </Box>

      <HStack spacing={4} mt={6} justify="space-between">
        {github && (
          <Box as="button" onClick={handleGitHubRedirect}>
            <Icon
              as={FaGithub}
              boxSize={6}
              color="gray.500"
              _hover={{ color: "#87CEFA" }}
            />
          </Box>
        )}
        <Link to={link || "#"}>
          <Button
            size="sm"
            rightIcon={<FaArrowRight />}
            bg="#87CEFA"
            color="black"
            fontWeight="600"
            _hover={{ bg: "#4682B4", color: "white" }}
          >
            Read More
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

const HeroBlog = () => {
  return (
    <Box py={20} px={6} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="7xl">
        <VStack spacing={6} mb={14} textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
          >
            📝 Insights, Stories & Code
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="3xl"
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Whether you’re a company leader, recruiter, developer, or just
            starting your coding journey — my blog shares practical lessons,
            real projects, and experiences that can inspire and guide.
          </Text>
          <Divider borderColor="gray.400" />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={12}>
          <Link to="/">
            <Button
              size="lg"
              px={10}
              rounded="full"
              bg="#87CEFA"
              color="black"
              fontWeight="bold"
              _hover={{ bg: "#4682B4", color: "white" }}
            >
              ⬅ Back To Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBlog;
