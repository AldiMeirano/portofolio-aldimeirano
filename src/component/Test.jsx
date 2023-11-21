import '../component/portofolio.css'
import photoSteveJobs from '../assets/gunung.png'
// import { Image, Box } from "@chakra-ui/image"
import { Box, Flex, Text, Spacer, Link, extendTheme,ChakraProvider, } from '@chakra-ui/react'
import styled from '@emotion/styled';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: `url(${photoSteveJobs})`, // Ganti dengan path gambar yang diinginkan
        bgSize: 'cover',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
      },
    },
  },
  fonts: {
    body: 'Roboto, sans-serif', // Ganti dengan font yang diinginkan
  },
});


const DivPage = styled.h1`
    margin: auto, auto,  auto, 50px
`


const NavbarAndWelcome = () => { 
  return (
    <ChakraProvider theme={theme}>
      <Box  p={10}>
        <Flex alignItems="center">
          <Text fontSize="xl"  color="white">
            Follow
          </Text>
  
          <Spacer />
          <Box>
            <Link color="white" mr={4} href="#home">
              Home
            </Link>
            <Link color="white" mr={4} href="#about">
              About
            </Link>
            <Link color="white" href="#contact">
              Contact
            </Link>
            
          </Box> 
       
        </Flex>
      </Box>
    <DivPage>Hello</DivPage>
    
    </ChakraProvider>
  );
}

// <Container>
//     <navbar className='navbar'>
//         <ul>
//           <li>
//            <a>Hello</a>
//           </li>
//         </ul>
//     </navbar>
// <H1>Aldi Meirano</H1>
// <P1>Fullstack Web Developer</P1>
//  </ Container>

export default NavbarAndWelcome;



${'' /* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        
        <Card>
      
        <CardBody>
       
        <Stack spacing='3' alignItems='center'>
            <Heading size='md'textAlign='center' >Front-End</Heading>
        
            <Box > 
            <Image
            src={Js}
            alt='JS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
           <Box> 
           <Image
            src={React}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
      
            <Box> 
           <Image
            src={NextJs}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
      
            <Box> 
           <Image
            src={Bootstrap}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
      
            
            <Box> 
           <Image
            src={Tailwind}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            <Box> 
           <Image
            src={Chakra}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            
            <Box> 
           <Image
            src={Html}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            <Box> 
           <Image
            src={Css}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
       
            
           
          </Stack>
      
          
        </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md' textAlign='center' >Back-End</Heading>
          </CardHeader>
          <CardBody>
          <Stack spacing='3' alignItems='center'>
           
        
      
            <Box> 
           <Image
            src={Nodejs}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            
            <Box> 
           <Image
            src={Expres}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            <Box> 
           <Image
            src={Sql}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
       
            <Box> 
           <Image
            src={MongoDb}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            
           
          </Stack>
          </CardBody>
         
        </Card>
        <Card >
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Stack spacing='3' alignItems='center'>
           
        
      
            <Box> 
           <Image
            src={Github}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            
            <Box> 
           <Image
            src={Git}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            <Box> 
           <Image
            src={Docker}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
       
            <Box> 
           <Image
            src={Postman}
            alt='JasS'
            borderRadius='lg'
            boxSize={10}
          />
            </Box>
            
           
          </Stack>
          </CardBody>
        
        </Card>
      </SimpleGrid> */}
