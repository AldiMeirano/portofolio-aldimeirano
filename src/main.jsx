import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Home from './Home.jsx'
import './index.css'


// Chakra UI
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    body: 'Gill sans, serif',
    heading:  'Georgia, serif',
    // Tambahkan font family lainnya sesuai kebutuhan
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter theme={theme}>
  <ChakraProvider>
  <Home />

</ChakraProvider>

  </BrowserRouter>
  </React.StrictMode>,
)
