import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack, Box, Heading, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const submitHandler = async () => {
    if (password !== confirmpassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await axios.post("https://snack-xjx3.onrender.com/api/user", {
        name,
        email,
        password,
      });
      console.log(res.data); // Log response data to the console
      toast({
        title: "Registration successful.",
        description: "You can now log in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error creating account.",
        description: error.response?.data?.message || "An error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      w="100%" 
      maxW="400px" 
      p={8} 
      borderRadius="lg" 
      boxShadow="lg" 
      bg="gray.50"
      mx="auto"
      mt="10px"
    >
      <VStack spacing={6}>
        <Heading as="h1" size="xl" color="teal.600" textAlign="center">
          Create an Account
        </Heading>
        <Text fontSize="md" color="gray.500" textAlign="center">
          Join us and start your journey!
        </Text>
        <FormControl id="first-name" isRequired>
          <FormLabel color="teal.600">Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel color="teal.600">Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel color="teal.600">Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="teal.500"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} bg="teal.500" color="white">
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel color="teal.600">Confirm Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              focusBorderColor="teal.500"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} bg="teal.500" color="white">
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          onClick={submitHandler}
          width="100%"
          bg="teal.600"
          color="white"
          _hover={{ bg: "teal.700" }}
          _active={{ bg: "teal.800" }}
        >
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default Signup;
