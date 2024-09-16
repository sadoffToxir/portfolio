import CoreNavbar from './components/Core/CoreNavbar.js'
import StarsCanvas from './components/Core/Stars/CoreStars.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#242424',
    }
  },
});


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
      <CssBaseline />

      <CoreNavbar />
      <StarsCanvas />
      </div>
    </ThemeProvider>
  )
}

export default App
