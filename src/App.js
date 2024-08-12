import './App.css';

import { Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio/inicio';
import Otros from './components/otros/otros';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>
    </div>
  );
}

export default App;

