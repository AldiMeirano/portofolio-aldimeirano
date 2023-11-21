import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Flex
} from "@chakra-ui/react";
import Bootstrap from "../assets/bootstrap.png";
import Chakra from "../assets/chakra.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Js from "../assets/js.png";
import NextJs from "../assets/next.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

// Import BackEnd Ui
import Expres from "../assets/expres.png";
import MongoDb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";
import Sql from "../assets/sql.png";

// Import Others
import Docker from "../assets/docker.png";
import Git from "../assets/git.png";
import Github from "../assets/github.png";
import Postman from "../assets/postman.png";
const Skillset = () => {
  return (
    <Container mb={10} >
      <Heading
        mb={10}
        bgGradient="linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)"
        bgClip="text"
        textAlign='center'
      >
        My Skills
      </Heading>
      <Grid templateColumns="repeat(3, 2fr)" column={2} gap="5" p={1}>
        <GridItem>
          <Card bgGradient='linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898,multiply;'>
          <CardHeader>
          <Heading size="md" textAlign="center">
                  Front-End
                </Heading>
          </CardHeader>
         
            <CardBody>
             
<Flex wrap='wrap'>


<Box>    
                  <Image src={Js} alt="JS" borderRadius="lg" boxSize={10} />
                </Box>
                <Box>
                  <Image
                    src={React}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image
                    src={NextJs}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image
                    src={Bootstrap}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image
                    src={Tailwind}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>
                <Box>
                  <Image
                    src={Chakra}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image src={Html} alt="JasS" borderRadius="lg" boxSize={10} />
                </Box>
                <Box>
                  <Image src={Css} alt="JasS" borderRadius="lg" boxSize={10} />
                </Box>

</Flex>
          
            
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card bgGradient='linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898,multiply;'>
            <CardHeader>
              <Heading size="md" textAlign="center">
                Back-End
              </Heading>
            </CardHeader>
            <CardBody>
             <Flex wrap='wrap' >
             <Box>
                  <Image
                    src={Nodejs}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image
                    src={Expres}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>
                <Box>
                  <Image src={Sql} alt="JasS" borderRadius="lg" boxSize={10} />
                </Box>

                <Box>
                  <Image
                    src={MongoDb}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>
             </Flex>
             
          
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Card bgGradient='linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898,multiply;'>
            <CardHeader>
              <Heading size="md" textAlign='center'>Others</Heading>
            </CardHeader>
            <CardBody mr='auto'>
              <Flex wrap='wrap'>
                <Box>
                  <Image
                    src={Github}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image src={Git} alt="JasS" borderRadius="lg" boxSize={10} />
                </Box>
                <Box>
                  <Image
                    src={Docker}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>

                <Box>
                  <Image
                    src={Postman}
                    alt="JasS"
                    borderRadius="lg"
                    boxSize={10}
                  />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Skillset;

//  <Card bgGradient= 'linear-gradient(to right, #d7d2cc 0%, #304352 100%);'>
