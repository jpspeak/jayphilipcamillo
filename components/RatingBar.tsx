import { Box, Grid, Text } from "@chakra-ui/react";

const RatingBar = ({ percentage, text }: { percentage: number; text: string }) => {
  return (
    <Grid gridTemplateColumns='repeat(2, 1fr)' columnGap={4} width='full'>
      <Text textAlign='right'>{text}</Text>
      <Box width='full' alignSelf='center' rounded='full' bgColor='gray' h='2'>
        <Box bgColor='cyan.400' rounded='full' h='2' w={`${percentage}%`}></Box>
      </Box>
    </Grid>
  );
};

export default RatingBar;
