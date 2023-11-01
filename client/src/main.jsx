import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductsProvider } from './hooks/useProducts.jsx';
import { CategoriesProvider } from './hooks/useCategories.jsx';
import { SuppliersProvider } from './hooks/useSuppliers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <CategoriesProvider>
            <SuppliersProvider>
              <App />
            </SuppliersProvider>
          </CategoriesProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
