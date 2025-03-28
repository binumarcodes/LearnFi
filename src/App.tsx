import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Value from './components/value/Value';
import Footer from './components/footer/Footer';


const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, Winky Sans,  sans-serif"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Value />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
