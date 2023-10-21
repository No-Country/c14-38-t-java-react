import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

// import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import SignUpPageStep from './pages/SignUpPageStep';
import ProductsPage from './pages/ProductsPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import axios from 'axios';
import useAuthContext from './hooks/useAuthContext';
import LayoutUser from './layout/LayoutUser';

// Si no se especifica una dirección de backend en el archivo .env entonces
// se utilizará localhost con el puerto 3001 de forma predeterminada.
axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

function App() {
  const { token } = useAuthContext();

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={!token ? <LoginPage /> : <Navigate to='/products' />}
        />
        <Route
          path='/login'
          element={!token ? <LoginPage /> : <Navigate to='/products' />}
        />
        <Route path='/' element={<LayoutUser />}>
          <Route
            path='/signup'
            element={!token ? <SignUpPage /> : <Navigate to='/products' />}
          />
          {/* <Route
            path='/branches'
            element={
              <ProtectedRoute>
                <BranchesPage />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path='/branches/:id'
            element={
              <ProtectedRoute>
                <BranchProfilePage />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path='/products'
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
