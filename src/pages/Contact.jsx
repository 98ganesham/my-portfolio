// Contact.jsx

import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import PaddingBox from "../assets/frame/PaddingBox";

const Contact = () => {
  const formRef = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_qbxyu4f", // <-- Replace with your EmailJS service ID
        "template_y82wytf", // <-- Replace with your template ID
        formRef.current,
        "Wo1LfvbwzhV3ao6UB" // <-- Replace with your public key
      );

      toast({
        title: "Message sent!",
        description: "Thanks for contacting me — I’ll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      formRef.current.reset();
    } catch (e) {
      toast({
        title: "Error sending message.",
        description: "Please try again later.",
        status: e.response ? "error" : "warning",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <PaddingBox>
      <Box
        border="5px solid #87CEFA"
        maxW={"fit-content"}
        mt={10}
        mx="auto"
        borderRadius={"24px"}
        boxShadow={"lg"}
      >
        {/* Gradient Heading */}
        <Heading
          m={{ base: 4, md: 6 }}
          fontSize={{ base: "28px", md: "32px", lg: "40px" }}
          fontWeight="700"
          lineHeight={{ base: "1.2", md: "1.25" }}
          textAlign="center"
        >
          <Text
            color="transparent"
            bgGradient="linear(to-r, #828282 20%, #87CEFA 80%)"
            bgClip="text"
            fontWeight="bold"
          >
            Contact Me
          </Text>
        </Heading>

        {/* Form */}
        <Box p={4} as="form" ref={formRef} onSubmit={sendEmail}>
          <VStack
            borderRadius={"14px"}
            boxShadow={"2xl"}
            p={8}
            spacing={5}
            align="stretch"
            bg="whiteAlpha.100"
          >
            <FormControl isRequired>
              <Flex align="center">
                <FormLabel mb="0" minWidth="35%">
                  Your Name
                </FormLabel>
                <Input type="text" name="user_name" placeholder="John Doe" />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel mb="0" minWidth="35%">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel mb="0" minWidth="35%">
                  Phone Number
                </FormLabel>
                <Input type="tel" name="user_phone" placeholder="+1234567890" />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel mb="0" minWidth="35%">
                  Address
                </FormLabel>
                <Input
                  type="text"
                  name="user_address"
                  placeholder="Your full address"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel mb="0" minWidth="35%">
                  Subject
                </FormLabel>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Project discussion, hiring..."
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="flex-start">
                <FormLabel mt="2" minWidth="35%">
                  Your Message
                </FormLabel>
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="How can I help you?"
                  flex="1"
                />
              </Flex>
            </FormControl>

            <Button
              type="submit"
              bg="#87CEFA"
              color={"black"}
              fontWeight="bold"
              px={8}
              py={6}
              rounded="full"
              isLoading={loading}
              _hover={{ bg: "#1877F2" }}
              width="100%"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box>
    </PaddingBox>
  );
};

export default Contact;
