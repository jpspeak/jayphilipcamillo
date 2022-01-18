import { Box, Button, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Box id='home' bgColor='#212121' color='white'>
        <Container maxW='container.lg' h='full' py='140' display='flex' alignItems='center' justifyContent='center'>
          <Grid gridTemplateColumns={{ base: "100%", md: "1fr 1.5fr" }} gap={14}>
            <Box position='relative' height={{ base: "200px", md: "400px" }}>
              <Image src='/man.png' alt='Man' objectFit='contain' layout='fill' />
            </Box>
            <Flex flexDirection='column' justifyContent='center'>
              <Text textAlign={{ base: "center", md: "left" }} fontSize='2xl'>
                Hi there! 👋 I am
              </Text>
              <Heading textAlign={{ base: "center", md: "left" }} fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} my='4'>
                Jay Philip Camillo
              </Heading>
              <Heading textAlign={{ base: "center", md: "left" }} as='h2' mt='4' fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight='light' color='cyan.300'>
                Full Stack Web Developer
              </Heading>
              <Flex justify={{ base: "center", md: "left" }}>
                <Button color='white' colorScheme='cyan' mt='10' rounded='full' px='10' size='lg'>
                  Hire Me
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
