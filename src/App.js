import { ThemeProvider } from './components/themeContext';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills  from "./components/Skills";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Work/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
