import { Route, Routes, Outlet } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';
// import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import SignUpPageStep from './pages/SignUpPageStep';
import ProductsPage from './pages/ProductsPage';
import { AddProduct } from './pages/ProductsPage/AddProduct';
import { EditProduct } from './pages/ProductsPage/EditProduct';
import CategoriesPage from './pages/CategoriesPage';
import { AddCategory } from './pages/CategoriesPage/AddCategory';
import { EditCategory } from './pages/CategoriesPage/EditCategory';
import SuppliersPage from './pages/SuppliersPage';
import { AddSupplier } from './pages/SuppliersPage/AddSupplier';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import BranchesPage from './pages/BranchesPage';

import LayoutUser from './layout/LayoutUser';

import axios from 'axios';
import { EditSupplier } from './pages/SuppliersPage/EditSupplier';

// Si no se especifica una dirección de backend en el archivo .env entonces
// se utilizará localhost con el puerto 3001 de forma predeterminada.
axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

function App() {
  return (
    <main>
      <Routes>
        {/* Guest Routes */}
        <Route path='/' element={<GuestRoute component={<Outlet />} />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>

        {/* Protected Routes */}
        <Route path='/' element={<ProtectedRoute component={<LayoutUser />} />}>
          <Route path='/branches' element={<BranchesPage />} />
          {/* <Route path='/branches/:id' element={<BranchProfilePage />} /> */}

          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/edit/:id' element={<EditProduct />} />
          <Route path='/addproduct' element={<AddProduct />} />

          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/categories/edit/:id' element={<EditCategory />} />

          <Route path='/suppliers' element={<SuppliersPage />} />
          <Route path='/addsupplier' element={<AddSupplier />} />
          <Route path='/suppliers/edit/:id' element={<EditSupplier />} />

          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
