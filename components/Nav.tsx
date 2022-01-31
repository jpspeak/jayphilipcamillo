import { Link, Stack } from "@chakra-ui/react";
import { MouseEventHandler, useContext } from "react";
import { SectionInViewContext } from "../pages";

const Nav = ({ onClick }: { onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
  const { sectionInView } = useContext(SectionInViewContext);
  return (
    <>
      <Stack direction={{ base: "column", md: "row" }} letterSpacing='wider' color='white' alignItems={{ base: "stretch", md: "center" }} spacing={14} as='nav' fontWeight='bold' width='full'>
        <Link href='#home' onClick={onClick} textAlign='center' color={sectionInView === "home" ? "cyan.400" : "inherit"} _hover={{ textDecor: "none" }}>
          Home
        </Link>
        <Link href='#about' onClick={onClick} textAlign='center' color={sectionInView === "about" ? "cyan.400" : "inherit"} _hover={{ textDecor: "none" }}>
          About
        </Link>
        <Link href='#skills' onClick={onClick} textAlign='center' color={sectionInView === "skills" ? "cyan.400" : "inherit"} _hover={{ textDecor: "none" }}>
          Skills
        </Link>
        <Link href='#my-work' onClick={onClick} textAlign='center' color={sectionInView === "my-work" ? "cyan.400" : "inherit"} _hover={{ textDecor: "none" }}>
          My Works
        </Link>
        <Link href='#contact-me' onClick={onClick} fontSize='sm' textAlign='center' bgColor='cyan.400' color='white' px='4' py='2' rounded='full' _hover={{ textDecor: "none", bgColor: "cyan.700" }}>
          Contact Me
        </Link>
      </Stack>
    </>
  );
};

export default Nav;
