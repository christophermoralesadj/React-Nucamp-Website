import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { CAMPSITES } from './app/shared/CAMPSITES';
import NucampLogo from './app/assets/img/logo.png'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className='App'>
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
