
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log("List items",productList);
    }

    fetchProducts();
  }, [])
  return (
    <>
      <Header />
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </>
  );
}

export default App;
