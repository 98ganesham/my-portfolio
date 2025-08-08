import { Box, Flex, Text, IconButton, Link } from "@chakra-ui/react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { RiArrowUpFill } from "react-icons/ri";
import PaddingBox from "../assets/frame/PaddingBox";

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        w="full"
        mt={12}
        transition="all 0.3s ease"
        backdropFilter="saturate(200%) blur(20px)"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        <PaddingBox>
          <Box>
            <Flex
              width="auto"
              mx="auto"
              align="center"
              justify="space-between"
              flexWrap="nowrap"
              gap={8}
            >
              {/* Left - Title */}
              <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                Lest Connect
              </Text>

              {/* Center - Social Icons */}
              <Flex gap={6} align="center">
                <Link
                  href="https://www.linkedin.com/in/chaw-be-lar-dahal-84b6a8356/"
                  isExternal
                  aria-label="LinkedIn"
                  _hover={{ color: "#0077B5" }}
                  fontSize="2xl"
                  transition="color 0.2s ease"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://facebook.com/chawbelar98/"
                  isExternal
                  aria-label="Facebook"
                  _hover={{ color: "#1877F2" }}
                  fontSize="2xl"
                  transition="color 0.2s ease"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://github.com/98ganesham"
                  isExternal
                  aria-label="GitHub"
                  _hover={{ color: "#6e7681" }}
                  fontSize="2xl"
                  transition="color 0.2s ease"
                >
                  <FaGithub />
                </Link>
              </Flex>

              {/* Right - Back to Top */}
              <Flex
                as={Link}
                href="#"
                gap={2}
                align="center"
                fontWeight="semibold"
                _hover={{ color: "#EEBF63" }}
                transition="color 0.2s ease"
              >
                Back to Top
                <RiArrowUpFill size={22} color={"#EEBF63"} />
              </Flex>
            </Flex>
          </Box>
        </PaddingBox>
      </Box>
    </>
  );
};

export default Footer;
