import './App.css';
import { Routes, Route } from "react-router-dom";
import { Main } from './components/Main';
import { Movies } from './components/Movies';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Header } from './components/HeaderComponent';
import { Profile } from './components/Profile/Profiple';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { NotFound } from './components/NotFound/NotFound';





function App() {
  return (
    <>
      <Routes>
        <Route path="/error" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<Movies saved={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>

  )
};


export default App;
