
import { useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
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
