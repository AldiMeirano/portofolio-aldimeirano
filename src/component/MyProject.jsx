import { Heading, Container, Card, Image, Stack, Box,CardBody, Text, Button, CardFooter, CardHeader } from "@chakra-ui/react"

const  MyProject = () => { 
        return( 

            <Container p={5}>
            <Box>
            <Heading textAlign='center'>My Project</Heading>
                <Card align='center' mt='5'>
  <CardHeader>
    <Heading size='md'>Dice Game</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
            </Box>
            <Box>
           
                <Card align='center' mt='5'>
  <CardHeader>
    <Heading size='md'>Calculator</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
           </Box>
             
       <Box>
      
                <Card align='center' mt='5'>
  <CardHeader>
    <Heading size='md'>Authentication</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>

</Card>

       </Box>
           
            
            </Container>
        )


}


export default MyProject;