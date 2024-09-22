import CoreNavbar from './components/core/CoreNavbar.js'
import StarsCanvas from './components/core/Stars/CoreStars.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/sections/hero/Hero.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
    }
  },
});


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <CssBaseline />
        <CoreNavbar />
        <Hero />
        <StarsCanvas />
      </div>
    </ThemeProvider>
  )
}

export default App
