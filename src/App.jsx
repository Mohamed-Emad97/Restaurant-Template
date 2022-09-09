import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Chef from "./components/Chef/Chef";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Intro from "./components/Intro/Intro";
import Laurels from "./components/Laurels/Laurels";
import Menu from "./components/Menu/Menu"; 
import News from "./components/News/News";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <Contact/>
      <News/>
      <Footer/>
    </>
  );
}

export default App;
