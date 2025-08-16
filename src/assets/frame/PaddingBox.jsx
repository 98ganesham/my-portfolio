import { Box, useBreakpointValue } from "@chakra-ui/react";

const PaddingBox = ({ children }) => {
  // Responsive horizontal padding
  const px = useBreakpointValue({
    base: "1rem", // phones
    sm: "1.25rem", // small tablets
    md: "1.5rem", // tablets
    lg: "2rem", // laptops
    xl: "3rem", // desktops
    "2xl": "4rem", // large screens
  });

  // Responsive vertical padding
  const py = useBreakpointValue({
    base: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    "2xl": "3rem",
  });

  return (
    <Box
      mx="auto" // center horizontally
      w="100%" // always take full width
      maxW="1536px" // content doesn’t stretch too wide on large monitors
      px={px}
      py={py}
    >
      {children}
    </Box>
  );
};

export default PaddingBox;
