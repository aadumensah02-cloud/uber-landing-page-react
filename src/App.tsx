import './App.css';
import Navbar from './components/Navbar.tsx'; 
import HeroSection from './components/HeroSection.tsx';


function App () {
  return (
    <div className="App">
      <div className='header-section'>
        <Navbar />
      </div>
      <div className='text-section'>
        <HeroSection />
      </div>
      
      

    </div>
  )
}

export default App;