import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BranchesPage from './pages/BranchesPage';
import BranchProfilePage from './pages/BranchProfilePage';
import ProductsPage from './pages/ProductsPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/branches/:id" element={<BranchProfilePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
