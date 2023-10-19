import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

// import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import SignUpPageStep from './pages/SignUpPageStep';
import BranchesPage from './pages/BranchesPage';
import BranchProfilePage from './pages/BranchProfilePage';
import ProductsPage from './pages/ProductsPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import axios from 'axios';
import useAuthContext from './hooks/useAuthContext';

// Si no se especifica una dirección de backend en el archivo .env entonces
// se utilizará localhost con el puerto 3001 de forma predeterminada.
axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

function App() {
  const { token } = useAuthContext();

  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={!token ? <LoginPage /> : <Navigate to="/branches" />}
          />
          <Route
            path="/login"
            element={!token ? <LoginPage /> : <Navigate to="/branches" />}
          />
          <Route
            path="/signup"
            element={!token ? <SignUpPage /> : <Navigate to="/branches" />}
          />
          <Route
            path="/branches"
            element={
              <ProtectedRoute>
                <BranchesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/branches/:id"
            element={
              <ProtectedRoute>
                <BranchProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
