import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MySkills } from './components/MySkills';
import { Education } from './components/Education';
import { MyProjects } from './components/MyProjects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <MyProjects/>
      <Projects />
      <Education/>
      <Contact />
    
      <Footer />
    </div>
  );
}

export default App;
