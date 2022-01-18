import { Box, Container, Grid, Heading, VStack } from "@chakra-ui/react";
import RatingBar from "./RatingBar";

const Skills = () => {
  return (
    <>
      <Box id='skills' min-height='100vh' bgColor='#262626' color='white'>
        <Container maxW='container.lg' h='full' py={{ base: "100", md: "140" }}>
          <Heading textAlign='center'>Skills</Heading>
          <Heading as='h3' mt='4' fontSize='xl' fontWeight='light' textAlign='center' color='gray.200'>
            Here are some of the tools that I am using ang has some experience with. 😉
          </Heading>
          <Grid gridTemplateColumns={{ base: "100%", md: "100%" }} gap={14} mt='20'>
            <Box>
              <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} fontSize='xl' gap={10}>
                <VStack spacing={8}>
                  <RatingBar percentage={90} text='HTML' />
                  <RatingBar percentage={90} text='CSS' />
                  <RatingBar percentage={90} text='Tailwind CSS' />
                  <RatingBar percentage={90} text='Bootstrap' />
                  <RatingBar percentage={85} text='Chakra UI' />
                  <RatingBar percentage={85} text='Figma' />
                  <RatingBar percentage={70} text='Illustrator' />
                </VStack>
                <VStack spacing={8}>
                  <RatingBar percentage={80} text='Javascript' />
                  <RatingBar percentage={75} text='Typescript' />
                  <RatingBar percentage={80} text='React JS' />
                  <RatingBar percentage={60} text='Vue.js' />
                  <RatingBar percentage={85} text='Next.js' />
                </VStack>
                <VStack spacing={8}>
                  <RatingBar percentage={85} text='Node.js' />
                  <RatingBar percentage={60} text='Laravel' />
                  <RatingBar percentage={75} text='MongoDB' />
                  <RatingBar percentage={75} text='SQL' />
                </VStack>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Skills;
