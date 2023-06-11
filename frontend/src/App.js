import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
