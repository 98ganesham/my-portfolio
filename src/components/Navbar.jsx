import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import PaddingBox from "../assets/frame/PaddingBox";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box as="header" w="auto" border="none" boxShadow={"md"} zIndex={100}>
        <PaddingBox>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {/* Left - Logo */}
            <Link to="/">
              <Text
                color="transparent"
                bgGradient="linear(to-r, #87CEFA 60%, #828282 40%)"
                bgClip={"text"}
                fontWeight="bold"
                fontStyle="italic"
                fontSize="xl"
              >
                Chaw Be Lar
              </Text>
            </Link>

            {/* Center */}
            {isMobile ? (
              <Flex
                position="absolute"
                left="70%"
                transform="translateX(-30%)"
                zIndex={150}
              >
                <IconButton
                  aria-label="Toggle Theme"
                  icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                  onClick={toggleColorMode}
                  variant="ghost"
                  _hover={{
                    bgColor: "#87CEFA",
                  }}
                />
              </Flex>
            ) : (
              <HStack
                as="nav"
                spacing={10}
                flex={1}
                justify="center"
                display={{ base: "none", md: "flex" }}
              >
                {links.map((link) => (
                  <NavLink key={link.name} to={link.path} onClick={onClose}>
                    {({ isActive }) => (
                      <Text
                        px={3}
                        py={2}
                        fontWeight={isActive ? "bold" : "normal"}
                        color={isActive ? "#87CEFA" : "inherit"}
                        _hover={{ color: "#87CEFA" }}
                        transition="color 0.2s ease-in-out"
                      >
                        {link.name}
                      </Text>
                    )}
                  </NavLink>
                ))}
              </HStack>
            )}

            {/* Right */}
            <Flex>
              {!isMobile && (
                <IconButton
                  aria-label="Toggle Theme"
                  icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                  onClick={toggleColorMode}
                  variant="ghost"
                  _hover={{
                    bgColor: "#87CEFA",
                  }}
                />
              )}

              {isMobile && (
                <Menu isOpen={isOpen}>
                  <MenuButton
                    as={IconButton}
                    variant={"ghost"}
                    aria-label="Open Menu"
                    icon={isOpen ? <FaTimes /> : <FaBars />}
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{ bgColor: "#87CEFA" }}
                  />
                  <MenuList
                    minW="150px"
                    maxH="full"
                    bg={colorMode === "light" ? "white" : "gray"}
                    zIndex={200}
                    mt={2} // small gap from toggle
                    border="none"
                    boxShadow="lg"
                    px={4} // reset horizontal padding
                  >
                    {links.map((link) => (
                      <MenuItem
                        px={6}
                        py={5}
                        key={link.name}
                        as={NavLink}
                        to={link.path}
                        onClick={onClose}
                        bg="transparent"
                        _hover={{
                          color: "#87CEFA",
                        }}
                      >
                        {link.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Flex>
        </PaddingBox>
      </Box>
    </>
  );
};

export default Navbar;
