import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1C1C1C" : "#FFFFFF",
        color: props.colorMode === "dark" ? "#E0E0E0" : "black", // default text color, not accent
      },
    }),
  },
  colors: {
    brand: {
      500: "#4682B4", // your accent color
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "inherit", // inherit default text color, not accent
        _hover: {
          color: "brand.500", // accent on hover
          textDecoration: "underline",
        },
        _activeLink: {
          color: "brand.500", // accent for active link
          fontWeight: "bold",
        },
        _focus: {
          boxShadow: "none",
          outline: "none",
        },
      },
    },
    Button: {
      baseStyle: {
        bg: "#828282", // button background
        color: "#1C1C1C", // dark text on buttons
        _hover: {
          bg: "brand.500", // hover background
        },
        _focus: {
          boxShadow: "none",
          outline: "none",
        },
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default customTheme;
