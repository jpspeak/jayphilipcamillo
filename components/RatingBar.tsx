import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
const RatingBar = ({ percentage, text }: { percentage: number; text: string }) => {
  const [barContainerRef, barContainerInView] = useInView({
    threshold: 0.5
    // triggerOnce: true
  });

  const barRef = useRef(null);

  useEffect(() => {
    if (barContainerInView) {
      gsap.fromTo(barRef.current, { width: 0 }, { width: `${percentage}%`, duration: 3, ease: "power3.out" });
    }
  }, [barContainerInView]);
  return (
    <Grid ref={barContainerRef} gridTemplateColumns='repeat(2, 1fr)' columnGap={4} width='full'>
      <Text textAlign='right'>{text}</Text>
      <Box width='full' alignSelf='center' rounded='full' bgColor='gray' h='2'>
        <Box ref={barRef} bgColor='cyan.400' rounded='full' h='2' w={`${percentage}%`}></Box>
      </Box>
    </Grid>
  );
};

export default RatingBar;
