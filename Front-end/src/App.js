import './App.css';
import ContactList from './component/ContactList';
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Edit from './pages/Edit';
import Create from './pages/Create';
import { useContext } from 'react';
import { ContactProvider } from './context/contact/ContactContext';


function App() {
  return (
    <div>
      <ContactProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>  
          <Route path='/edit/:id' element={<Edit/>}/>  
          <Route path='/create/' element={<Create/>}/>  
          <Route path='/about' element={<About/>}/>  
        </Routes>
      </BrowserRouter>
      </ContactProvider>
    </div>
  );
}

export default App;
