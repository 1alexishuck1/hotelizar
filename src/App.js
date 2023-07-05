import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Alojamiento from './pages/Alojamiento';
import Login from './pages/Login';
import Resultados from './pages/Resultados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/alojamiento' element={<Alojamiento />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resultados' element={<Resultados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
