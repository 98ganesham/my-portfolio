import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaDownload, FaFacebook, FaMobile } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/Chaw_Be_Lar_Profile-removebg-preview.png";
import Resume from "../../assets/resumePdf/Chaw Be Lar-Computer.pdf";

const HeroHeader = () => {
  return (
    <Box
      position="sticky"
      display="flex"
      flexDirection={{
        base: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      maxW="100%"
      gap={{ base: "none", md: "none", lg: "20" }}
      mt={4}
      zIndex={100}
    >
      <Box w={{ base: "100%", md: "100%", lg: "50%" }} alignItems={"center"}>
        <Text
          mb={{ base: 3, md: 4 }}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
        >
          Hey there! 👋
        </Text>

        <Heading
          mb={{ base: 4, md: 6 }}
          fontSize={{ base: "28px", md: "32px", lg: "40px" }}
          fontWeight="700"
          lineHeight={{ base: "1.2", md: "1.25" }}
        >
          <Text
            color="transparent"
            bgGradient="linear(to-r, #828282 20%, #87CEFA 80%)"
            bgClip={"text"}
            fontWeight="bold"
          >
            I’m Chaw Be Lar.
          </Text>

          <br />
          <Text
            as="span"
            position="relative"
            fontWeight="600"
            fontSize={{ base: "18px", md: "20px", lg: "22" }}
          >
            Web Developer
          </Text>
        </Heading>

        <Text
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          lineHeight={{ base: "1.5", md: "1.6" }}
          mb={{ base: 6, md: 8 }}
        >
          Based in Bangkok, Thailand, originally from Myanmar. I’m passionate
          about crafting clean, minimal, and user‑focused websites. My expertise
          spans React.js, Node.js, MERN stack, and a strong foundation in PHP.
          If you're looking for performance-driven, elegant web solutions, I’m
          here to help.
        </Text>
        <Box gap={10} mb={8} px={4} display={"flex"} alignItems={"center"}>
          <Text
            whiteSpace={"nowrap"}
            fontWeight={"700"}
            textOverflow="normal"
            textColor="#c0c0c0c6"
          >
            Follow Me
          </Text>

          {/* External links remain anchor tags */}
          <a
            href="https://www.linkedin.com/in/chaw-be-lar-dahal-84b6a8356/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              _hover={{ color: "#0077B5" }}
              alignItems={"center"}
              variant={"unstyled"}
            >
              <LiaLinkedin size={34} />
            </IconButton>
          </a>
          <a
            href="https://web.facebook.com/chawbelar98/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              alignItems={"center"}
              _hover={{ color: "#1877F2" }}
              variant={"unstyled"}
            >
              <FaFacebook size={32} />
            </IconButton>
          </a>
        </Box>

        <Box
          display={"flex"}
          alignItems={{ base: "center", md: "start" }}
          gap={{ base: 4, md: 6 }}
        >
          {/* Internal link changed to react-router-dom Link */}
          <Link to="/contact">
            <Button
              bgColor="#87CEFA"
              _hover={{
                bg: "#C0C0C0",

                border: "2px solid #87CEFA",
                color: "#222",
              }}
              size={"md"}
              gap={2}
            >
              <FaMobile />
              Contact Me
            </Button>
          </Link>

          {/* Download button stays as <a> because it's a file download */}
          <a href={Resume} download>
            <Button
              bgColor="#C0C0C0"
              _hover={{
                bg: "#87CEFA",

                border: "2px solid #828282",
                color: "#222",
              }}
              gap={2}
              size={"md"}
            >
              <FaDownload />
              View Portfolio
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        mt={{ base: "12", md: "16", lg: "none" }}
        w={{ base: "100%", md: "100%", lg: "50%" }}
        align={"center"}
        mb={{ base: 8, md: 12, lg: 15 }}
      >
        <Image
          src={Profile}
          bgColor="gray"
          borderRadius={{ base: "2xl", md: "3xl", lg: "full" }}
          boxShadow="md"
          objectFit="cover"
          position="relative"
          zIndex={1}
          _hover={{ boxShadow: "md", bg: "#87CEEB", transform: "scale(1.01)" }}
        />
      </Box>
    </Box>
  );
};

export default HeroHeader;
