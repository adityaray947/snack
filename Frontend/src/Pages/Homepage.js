import React from 'react';
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Center,
} from "@chakra-ui/react";
import Login from '../Component/Authentication/Login';
import Signup from '../Component/Authentication/Signup';
import backgroundImage from './Image1.jpg'


const Homepage = () => {
  return (
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minH="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Container maxW="md" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          p={4}
          bg="rgba(0, 128, 128, 0.8)"
          w="100%"
          m="10px 0 15px 0"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Snack Saver
          </Text>
        </Box>
        <Box
          bg="rgba(255, 255, 255, 0.9)"
          w="100%"
          p={6}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="lg"
        >
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList mb="1em">
              <Tab width="50%" fontWeight="bold">Login</Tab>
              <Tab width="50%" fontWeight="bold">Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
