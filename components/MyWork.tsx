import { Box, Container, Grid, Heading } from "@chakra-ui/react";

const MyWork = () => {
  return (
    <>
      <Box id='my-work' min-height='100vh' bgColor='#262626' color='white'>
        <Container maxW='container.lg' h='full' py={{ base: "100", md: "140" }}>
          <Heading textAlign='center'>My Work</Heading>
          <Grid gridTemplateColumns={{ md: "repeat(3,1fr)" }} gap={10} mt='20'>
            <Box rounded='lg' width='full' pb='75%' position='relative' bgColor='gray'></Box>
            <Box rounded='lg' width='full' pb='75%' position='relative' bgColor='gray'></Box>
            <Box rounded='lg' width='full' pb='75%' position='relative' bgColor='gray'></Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyWork;
