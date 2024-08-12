import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
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
      const res = await axios.post(`https://snack-ey97.onrender.com//api/${company}`, {
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
    <VStack spacing="5px">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="location" isRequired>
        <FormLabel>Location</FormLabel>
        <Input
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormControl>
      <FormControl id="category" isRequired>
        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="snacks">Snacks</option>
          <option value="burgers">Burgers</option>
          <option value="main_course">Main Course</option>
          <option value="desserts">Desserts</option>
          <option value="beverages">Beverages</option>
        </Select>
      </FormControl>
      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>
      <FormControl id="ratings" isRequired>
        <FormLabel>Ratings</FormLabel>
        <Input
          placeholder="Enter Ratings"
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
        />
      </FormControl>
      <FormControl id="image" isRequired>
        <FormLabel>Image URL</FormLabel>
        <Input
          placeholder="Enter Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </FormControl>
      <FormControl id="company" isRequired>
        <FormLabel>Select Company</FormLabel>
        <Select
          placeholder="Select Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="swiggy">Swiggy</option>
          <option value="zomato">Zomato</option>
          <option value="dominos">Domino's</option>
          <option value="mcdonalds">McDonald's</option>
        </Select>
      </FormControl>
      <Button
        onClick={submitHandler}
        width="100%"
        style={{ marginTop: 15 }}
      >
        Add to Collection
      </Button>
    </VStack>
  );
};

export default AddToCollection;
