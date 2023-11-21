
import Navbar from './component/Navbar'
import About from './component/About'
import Hero from './component/Hero'
import Skillset from './component/Skillset'
import MyProject from './component/MyProject'
import { Box} from  '@chakra-ui/react'
import gunungHimalaya from '../src/assets/himalaya.jpg'





const Home = () => { 
  return ( 
    <>
    <Box
        bgImage={`url('${gunungHimalaya}')`} // Ganti dengan path gambar Anda
        bgSize="cover"
        bgPosition="center"
        w="100%"
        h="400px"  // Sesuaikan tinggi sesuai kebutuhan
      >
    <Navbar />
         <Hero />
    </Box>
        <About />
        <Skillset />
        <Box
        bgGradient='linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898,multiply; '
        bgSize = 'cover'
        bgPosition='center'
        w='100%'
       
        > 
        <MyProject />
        </Box>
    </>
  )
}



export default Home
