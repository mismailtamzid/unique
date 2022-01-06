import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Components/Product/Product';
import Sale from './Components/Sale/Sale';
import Portfolio from './Components/Portfolio/Portfolio';
import Lookbook from './Components/Lookbook/Lookbook';
import Shop from './Components/Shop/Shop';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import AppBar from './Components/Home/AppBar/AppBar';

function App() {
  return (
    <BrowserRouter >
      <AppBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Product />} />
        <Route path="sale" element={<Sale />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="lookbook" element={<Lookbook />} />
        <Route path="blog" element={<Blog />} />

        {/* <Route path="/sale">
            <Sale />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/lookbook">
            <Lookbook />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
