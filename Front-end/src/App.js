import './App.css';
import ContactList from './component/ContactList';
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Edit from './pages/Edit';
import Create from './pages/Create';
import { ContactProvider } from './context/contact/ContactContext';
import { UsersProvider } from './context/userAuth/UserContext';
import { AlertState } from './context/alert/AlertState';


function App() {
  return (
    <div>
      <UsersProvider>
        <AlertState>
          <ContactProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/create/' element={<Create />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </BrowserRouter>
          </ContactProvider>
        </AlertState>
      </UsersProvider>
    </div>
  );
}

export default App;
