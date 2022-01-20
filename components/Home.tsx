import { Box, Button, Container, Flex, Grid, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Home = () => {
  const greetingsRef = useRef(null);
  const fullnameRef = useRef(null);
  const jobTitleRef = useRef(null);
  const hireMeBtnRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "slow(0.7, 0.7, false)", duration: 0.75 } });
    timeline.fromTo(handRef.current, { y: 500, scale: 0, opacity: 0 }, { y: 0, scale: 1, opacity: 1 });
    timeline.fromTo(greetingsRef.current, { y: 500, scale: 0, opacity: 0 }, { y: 0, scale: 1, opacity: 1 }, "<");
    timeline.fromTo(fullnameRef.current, { y: 500, scale: 0, opacity: 0 }, { y: 0, scale: 1, opacity: 1 }, "<70%");
    timeline.fromTo(jobTitleRef.current, { y: 500, scale: 0, opacity: 0 }, { y: 0, scale: 1, opacity: 1 }, "<70%");
    timeline.fromTo(hireMeBtnRef.current, { opacity: 0 }, { opacity: 1, autoAlpha: 1 });
    timeline.fromTo(handRef.current, { rotation: "40deg", x: 4 }, { rotation: "0deg", x: 0, yoyo: true, repeat: 3, duration: 0.3 });
  }, []);

  return (
    <>
      <Box id='home' bgColor='#212121' color='white'>
        <Container maxW='container.lg' h='full' py='140' display='flex' alignItems='center' justifyContent='center'>
          <Grid gridTemplateColumns={{ base: "100%", md: "1fr 1.5fr" }} gap={14}>
            <Box position='relative' height={{ base: "200px", md: "400px" }}>
              <Image src='/man.png' alt='Man' objectFit='contain' layout='fill' />
            </Box>
            <Flex flexDirection='column' justifyContent='center'>
              <HStack position='relative' pl='6'>
                <Box ref={handRef} as='span' width='max-content' position='absolute' left={0}>
                  👋
                </Box>
                <Text ref={greetingsRef} textAlign={{ base: "center", md: "left" }} fontSize='2xl'>
                  Hi there! I&apos;m
                </Text>
              </HStack>

              <Heading ref={fullnameRef} textAlign={{ base: "center", md: "left" }} fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} my='4'>
                Jay Philip Camillo
              </Heading>
              <Heading ref={jobTitleRef} textAlign={{ base: "center", md: "left" }} as='h2' mt='4' fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight='light' color='cyan.300'>
                Full Stack Web Developer
              </Heading>
              <Flex justify={{ base: "center", md: "left" }}>
                <Button ref={hireMeBtnRef} as='a' href='#contact-me' visibility='hidden' color='white' colorScheme='cyan' mt='10' rounded='full' px='10' size='lg'>
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
