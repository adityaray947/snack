import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.js";

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const navigate = useNavigate();
    const { login } = useAuth(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async () => {
        try {
            const res = await axios.post("https://snack-xjx3.onrender.com/api/user/login", {
                email,
                password,
            });
            console.log(res.data);
            toast({
                title: "Logged in successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            login(res.data);
            navigate("/home");
        } catch (error) {
            console.error(error);
            toast({
                title: "Error logging in.",
                description: error.response?.data?.message || "An error occurred.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <VStack spacing="5px">
            <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                onClick={submitHandler}
                width="100%"
                style={{ marginTop: 15 }}
            >
                Login
            </Button>
        </VStack>
    );
};

export default Login;
