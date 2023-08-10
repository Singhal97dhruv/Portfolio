import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import About from "./components/about/About"
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Certifications from './components/Certifications/Certifications';
function App() {
  return (
    <div className="App">

    <Header />
    <Nav />
    <Experience/>
    <About/>
    <Services/>
    <Testimonials/>
    <Portfolio />
    <Certifications/>
    <Contact/>
    <Footer/>
               
    </div>
  );
}

export default App;
