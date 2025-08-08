import { Box } from "@chakra-ui/react";

const PaddingBox = ({ children }) => {
  return (
    <Box
      px={["1rem", "1.3rem", "1.5rem", "1.7rem", "1.8rem", "2rem"]} // xs → 2xl
      py={["1rem", "1.3rem", "1.5rem", "1.7rem", "1.8rem", "2rem"]}
      mx="auto"
      w="100%"
    >
      {children}
    </Box>
  );
};

export default PaddingBox;
