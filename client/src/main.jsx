// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductsProvider } from './hooks/useProducts.jsx';
import { FamiliesProvider } from './hooks/useFamilies.jsx';
import { SuppliersProvider } from './hooks/useSuppliers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <FamiliesProvider>
          <SuppliersProvider>
            <App />
          </SuppliersProvider>
        </FamiliesProvider>
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
