import './App.css';
import About from './components/About/About';
import Commmunity from './components/Community/Community';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Introduction from './components/Introduction/introduction';
import PetProjects from './components/PetProjects/PetProjects';
import Talk from './components/Talk/talk';
import Writing from './components/Writing/writing';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <About/>
      <Experience/>
      <Writing/>
      <Education/>
      <Talk/>
      <PetProjects/>
      <Commmunity/>
    </div>
  );
}

export default App;