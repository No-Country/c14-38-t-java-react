import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BranchesPage from './pages/BranchesPage';
import BranchProfilePage from './pages/BranchProfilePage';
import ProductsPage from './pages/ProductsPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import axios from 'axios';

// Si se quiere probar en local,
// cambiar el valor de la variable de entorno a
// http://localhost:3001/ en el archivo .env

axios.defaults.baseURL =
  import.meta.VITE_BACKEND_URL || 'https://stockwise-back.onrender.com/';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/branches/:id" element={<BranchProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
