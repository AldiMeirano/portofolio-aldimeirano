import {Container, Flex , Spacer,Box, Link, } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Navbar = () => { 
    return(
        <Container maxW='7x1' padding={5}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box display="flex"
          color='white'   
        >

        <Link mr={5}>
            <FaGithub />
        </Link>
        <Link mr={5}>
            <FaLinkedin />
        </Link>
         <Link>
            <FaInstagramSquare />
        </Link>

      
       
  </Box>
  <Spacer />
  <Box>
            <Link color="black" mr={4} href="#home">
               Home
             </Link>
             <Link color="black" mr={4} href="#about">
               About
             </Link>
             <Link color="black" href="#contact">
               Contact
             </Link>
            
           </Box>
</Flex>
        </Container>
    )

}


export default Navbar 