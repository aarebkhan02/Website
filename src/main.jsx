import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './Components/CartContext'; // ✅ Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* ✅ Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);
