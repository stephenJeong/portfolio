import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bio />
      <Skills />
    </div>
  );
}

export default App;
