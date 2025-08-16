import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import PaddingBox from "../assets/frame/PaddingBox";

const Contact = () => {
  const formRef = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xzzvwlkk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for contacting me — I’ll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        formRef.current.reset();
      } else {
        toast({
          title: "Error sending message.",
          description: "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Error sending message.",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <PaddingBox>
      <Box maxW="6xl" mx="auto" py={{ base: 10, md: 16 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="semibold"
          fontFamily="monospace"
          lineHeight="short"
          textAlign="center"
          mb={4}
        >
          Get in Touch
        </Heading>
        <Text textAlign="center" fontSize="md" mb={10} color="gray.500">
          Have a project in mind, collaboration, or just want to say hi? Drop me
          a message below.
        </Text>

        <Flex
          gap={10}
          direction={{ base: "column", md: "row" }}
          align="stretch"
        >
          {/* Left Info */}
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={6}
          >
            <Text fontSize="lg" fontWeight="semibold">
              Let’s build something amazing 🚀
            </Text>
            <Text color="gray.600">
              I’m always open to new opportunities, freelance work, or
              interesting discussions. I am available to work anywhere in
              Thailand, on-site, with room provided. Feel free to reach out!
            </Text>
            <Box fontSize="sm" color="gray.500">
              <Text>
                <strong>Email:</strong> chawbelar98@gmail.com
              </Text>
              <Text>
                <strong>Phone:</strong> +66 628 131 975
              </Text>
              <Text>
                <strong>Location:</strong> 198, 202 Patthana Chonabot 3 Rd,
                Khlong Song Ton Nun, Lat Krabang, Bangkok 10520
              </Text>
            </Box>
          </Box>

          {/* Right Form */}
          <Box
            flex="1.5"
            as="form"
            ref={formRef}
            onSubmit={sendEmail}
            bg="whiteAlpha.50"
            backdropFilter="blur(12px)"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "translateY(-3px)" }}
          >
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  focusBorderColor="#87CEFA"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  focusBorderColor="#87CEFA"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+1234567890"
                  focusBorderColor="#87CEFA"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Project discussion, hiring..."
                  focusBorderColor="#87CEFA"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Your Message</FormLabel>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="How can I help you?"
                  focusBorderColor="#87CEFA"
                />
              </FormControl>

              <Button
                type="submit"
                bg="#87CEFA"
                color="black"
                fontWeight="bold"
                py={6}
                rounded="full"
                isLoading={loading}
                _hover={{ bg: "#4682B4", color: "white" }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </PaddingBox>
  );
};

export default Contact;
