import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
