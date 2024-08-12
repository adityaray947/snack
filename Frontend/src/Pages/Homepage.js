import React from 'react';
import '../App.css';
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Flex,
    Center,
  } from "@chakra-ui/react";
import Login from '../Component/Authentication/Login';
import Signup from '../Component/Authentication/Signup';

const Homepage = () => {
  return (
    <div className='signIn'>
      <Container maxW="xl"  centerContent>
      <Box
        d="flex"
        justifyContent='center'
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      > 
            <Text fontSize="4xl" >
                Snacks
            </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
       <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
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
    </div>
  );
}

// JavaScript function for handling tab switch


export default Homepage;
