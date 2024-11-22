import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar.js';
import Homepage from './homepage/homepage.js';
import Store from './store-front/store.js';
import Cart from './cart/cart.js';
import Product from './product/product.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" Component={Homepage} />
                <Route path='/store' Component={Store} />
                <Route path="/cart" Component={Cart}/>
                <Route path="/product" Component={Product}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
