import logo from './logo.svg';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Donate from './pages/Donate';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>  
        <Route path='/' element={<Home />}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <Footer />  
    </div>    
  );
}

export default App;
