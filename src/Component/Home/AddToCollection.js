import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddToCollection = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [collection, setCollection] = useState("swiggy"); // Default to Swiggy

  const submitHandler = async () => {
    if (!name || !location || !place || !price || !ratings) {
      toast({
        title: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/${collection}`, {
        name,
        location,
        place,
        price,
        ratings,
      });
      console.log(res.data); // Log response data to the console
      toast({
        title: "Data added successfully.",
        description: `Data added to ${collection} collection.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form
      setName("");
      setLocation("");
      setPlace("");
      setPrice("");
      setRatings("");
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
      <FormControl id="place" isRequired>
        <FormLabel>Place</FormLabel>
        <Input
          placeholder="Enter Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
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
      <FormControl id="collection" isRequired>
        <FormLabel>Select Collection</FormLabel>
        <Select
          placeholder="Select Collection"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        >
          <option value="swiggy">Swiggy</option>
          <option value="zomato">Zomato</option>
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
