import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaDownload, FaFacebook, FaMobile } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/Chaw_Be_Lar_Profile-removebg-preview.png";
import Resume from "../../assets/resumePdf/Chaw Be Lar-Computer.pdf";

const HeroHeader = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="space-between"
      gap={{ base: 12, lg: 20 }}
      mt={8}
      w="100%"
    >
      {/* Left Content */}
      <Box w={{ base: "100%", lg: "50%" }}>
        <Text fontSize={{ base: "md", md: "lg" }} mb={2}>
          Hey there! 👋
        </Text>

        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="semibold"
          fontFamily="monospace"
          lineHeight="short"
          mb={4}
        >
          I’m Chaw Be Lar
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color="gray.600"
          mb={6}
        >
          Web Developer
        </Text>

        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.500"
          lineHeight="tall"
          mb={8}
        >
          Based in Bangkok, Thailand, originally from Myanmar. I’m passionate
          about crafting clean, minimal, and user-focused websites. My expertise
          spans React.js, Node.js, MERN stack, and PHP. If you're looking for
          performance-driven, elegant web solutions, I’m here to help.
        </Text>

        {/* Social Links */}
        <HStack spacing={4} mb={8}>
          <Text fontWeight="bold" color="gray.500" mr={2}>
            Follow Me
          </Text>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/chaw-be-lar-dahal-810407382/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<LiaLinkedin size={28} />}
            variant="ghost"
            _hover={{ color: "#0077B5" }}
          />
          <IconButton
            as="a"
            href="https://web.facebook.com/chawbelar98/"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook size={26} />}
            variant="ghost"
            _hover={{ color: "#1877F2" }}
          />
        </HStack>

        {/* Action Buttons */}
        <Flex gap={4} wrap="wrap">
          <Link to="/contact">
            <Button
              leftIcon={<FaMobile />}
              variant="ghost"
              _hover={{ bg: "#4682B4", color: "#f5f5f5" }}
            >
              Contact Me
            </Button>
          </Link>
          <a href={Resume} download>
            <Button
              leftIcon={<FaDownload />}
              variant="ghost"
              color="#87CEFA"
              _hover={{ bg: "#4682B4", color: "#f5f5f5" }}
            >
              View Resume
            </Button>
          </a>
        </Flex>
      </Box>

      {/* Right Profile Image */}
      <Box w={{ base: "70%", md: "60%", lg: "40%" }} align="center">
        <Image
          src={Profile}
          borderRadius="12px"
          maxH={{ base: "280px", md: "320px", lg: "360px" }}
          objectFit="cover"
          alt="profile"
        />
      </Box>
    </Flex>
  );
};

export default HeroHeader;
