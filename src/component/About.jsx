import { Container, Heading, Box, Text, Divider} from "@chakra-ui/react"

const About = () => { 
    return (
        <Container padding={10}  centerContent>
        <Box>
            <Heading  bgGradient= 'linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)' bgClip='text'>About Me</Heading>
          </Box>
          <Box m={5} textAlign='center'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eos impedit ducimus totam eligendi ut sapiente et illo porro, saepe non omnis praesentium deserunt culpa libero minima rerum aliquid mollitia.</Text>
          </Box>
          <Divider my='2' borderWidth="2px" borderColor='linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%)' width="50%"/>
        </Container>
    )
}


export default About;