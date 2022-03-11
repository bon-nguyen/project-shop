import { Route } from 'react-router-dom';

import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductFeature from './features/Product';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/products"} component={ProductFeature} />
      </Switch>
    </>
  );
}

export default App;
