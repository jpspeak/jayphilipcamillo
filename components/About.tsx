import { Box, Button, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
const About = () => {
  const [quoteContainerRef, quoteContainerInView] = useInView({
    threshold: 0.8
    // triggerOnce: true
  });

  const quoteImageRef = useRef(null);

  useEffect(() => {
    if (quoteContainerInView) {
      gsap.fromTo(quoteImageRef.current, { rotation: "90deg" }, { rotation: 0 });
    }
  }, [quoteContainerInView]);

  return (
    <>
      <Box id='about' min-height='100vh' bgColor='#262626' color='white'>
        <Container maxW='container.lg' h='full' py={{ base: "100", md: "140" }}>
          <Grid gridTemplateColumns={{ base: "100%", md: "1fr 1.5fr" }} gap={14}>
            <Box ref={quoteContainerRef} rounded='xl' w='full' border='2px solid #gray' px='8' py='4' color='black' fontFamily='monospace'>
              <Heading display={{ base: "block", md: "none" }} textAlign={{ base: "center", md: "start" }} color='white' mb='20'>
                About Me
              </Heading>
              <Box rounded='full' bgColor='white' p='1' mx='4' my='2'>
                <Flex rounded='full' overflow='hidden' border='8px solid #363636'>
                  <Image src='/me.png' alt='Man' objectFit='cover' height='800' width='800' />
                </Flex>
              </Box>
              <Flex mt='8' justifyContent='center'>
                <Flex ref={quoteImageRef}>
                  <Image src='/quote.svg' alt='quote' height='60' width='60' objectFit='contain' />
                </Flex>
              </Flex>
              <Text mt='4' lineHeight='tall' color='gray.200' fontSize='xl' textAlign='center'>
                Being passionate to what we are doing
                <br /> will give us the best thing.
              </Text>
              <Text mt='8' textAlign='right' width='full' fontSize='lg' color='cyan.300'>
                - JP
              </Text>
            </Box>
            <Box>
              <Heading display={{ base: "none", md: "block" }} textAlign={{ base: "center", md: "start" }}>
                About Me
              </Heading>
              <VStack width='full' textAlign={{ base: "start", md: "start" }} spacing={12} alignItems='normal' mt='8' letterSpacing='wide' lineHeight='tall' fontSize={{ base: "xl", md: "2xl" }}>
                <Text className='about-content' mt='4'>
                  I develop Web Apps from scratch joyfully.😁
                </Text>
                <Text className='about-content'>I always make the design resposive from mobile to desktop sizes as possible. 📏</Text>
                <Text className='about-content'>
                  As I mature in programming, my main focus is always on the scalability, performance and the best practices in writing a code to give the client the best product I could offer. 💌
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
