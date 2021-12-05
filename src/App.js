
import { useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll();
    }

    fetchProducts();
  }, [])
  return (
    <>
      <Header />
    </>
  );
}

export default App;
