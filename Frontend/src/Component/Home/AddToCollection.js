import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack, Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";

const AddToCollection = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [image, setImage] = useState("");
  const [company, setCompany] = useState("swiggy");

  const submitHandler = async () => {
    if (!name || !location || !category || !price || !ratings || !image) {
      toast({
        title: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await axios.post(`https://snack-xjx3.onrender.com/api/${company}`, {
        name,
        location,
        category,
        price,
        ratings,
        image,
        company_name: company,
      });
      console.log(res.data);
      toast({
        title: "Data added successfully.",
        description: `Data added to ${company} collection.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form
      setName("");
      setLocation("");
      setCategory("");
      setPrice("");
      setRatings("");
      setImage("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error adding data.",
        description: error.response?.data?.message || "An error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="lg" mx="auto" p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <VStack spacing={5}>
        <FormControl id="name" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Name</FormLabel>
          <Input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Location</FormLabel>
          <Input
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <FormControl id="category" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Category</FormLabel>
          <Select
            placeholder="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          >
            <option value="snacks">Snacks</option>
            <option value="burgers">Burgers</option>
            <option value="main_course">Main Course</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages</option>
          </Select>
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Price</FormLabel>
          <Input
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <FormControl id="ratings" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Ratings</FormLabel>
          <Input
            placeholder="Enter Ratings"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <FormControl id="image" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Image URL</FormLabel>
          <Input
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <FormControl id="company" isRequired>
          <FormLabel fontWeight="bold" color="gray.700">Select Company</FormLabel>
          <Select
            placeholder="Select Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          >
            <option value="swiggy">Swiggy</option>
            <option value="zomato">Zomato</option>
            <option value="dominos">Domino's</option>
            <option value="mcdonalds">McDonald's</option>
          </Select>
        </FormControl>
        <Button
          onClick={submitHandler}
          colorScheme="blue"
          width="full"
          size="lg"
        >
          Add to Collection
        </Button>
      </VStack>
    </Box>
  );
};

export default AddToCollection;
