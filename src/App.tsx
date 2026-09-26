import './App.css';
import Navbar from './components/Navbar.tsx'; 
import HeroSection from './components/HeroSection.tsx';
import ServiceOptions from './components/ServiceOptions.tsx';
import LoginSection from './components/LoginSection.tsx';
import ReserveFeature from './components/ReserveFeature.tsx';
import CitySection from './components/CitySection.tsx';
import DriveSection from './components/DriveSection.tsx';
import BusinessSection from './components/BusinessSectiom.tsx';
import AppDownloadSection from './components/AppDownloadSection.tsx';

function App () {
  return (
    <div className="App">
      <div className='header-section'>
        <Navbar />
      </div>
      <div className='text-section'>
        <HeroSection />
        <ServiceOptions />
        <LoginSection />
        <ReserveFeature />
        <CitySection />
        <DriveSection /> 
        <BusinessSection />
      </div>
      <AppDownloadSection />
      
      

    </div>
  )
}

export default App;