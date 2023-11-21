import { Container , Box,Image, Heading, Text } from "@chakra-ui/react";
import steveJobs from '../assets/steve-jobs.png'

const Hero = () => { 


        return( 
            <Container maxW='2xl'  mt='22' centerContent text>
            <Box padding='4'   maxW='md'>
            <Image
   borderRadius='full'
  boxSize='150px'
    objectFit='cover'
    src= {steveJobs}
    alt='Dan Abramov'
  />  
  
  {/* background: ;
 background-blend-mode: screen; */}
     </Box>
     <Box>
     <Heading as='h1'   bgGradient= 'linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)' bgClip='text'>Aldi Meirano</Heading>
     <Text fontSize='sm'  textAlign= 'center' color='#F3EEEA' >Fullstack Web Developer</Text>
    
     </Box>
          </Container>

        )

}

export default Hero;