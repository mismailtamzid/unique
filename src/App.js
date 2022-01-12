import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Product from './Components/Product/Product';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import AppBar from './Components/Home/AppBar/AppBar';
import About from './Components/Home/About/About';
import Contact from './Components/Contact/Contact';

import SingleProduct from './Components/SingleProduct/SingleProduct';
import BlogDetails1 from './Components/BlogDetails/BlogDetails1';
import BlogDetails2 from './Components/BlogDetails/BlogDetails2';
import BlogDetails3 from './Components/BlogDetails/BlogDetails3';
import BlogDetails4 from './Components/BlogDetails/BlogDetails4';
import Footer from './Components/Footer/Footer';
import Deshboard from './Components/DeshBoard/DeshBoard';
import DeshBoardHome from './Components/DeshBoard/DeshBoardHome/DeshBoardHome';
import AddNewProduct from './Components/DeshBoard/AddNewProduct/AddNewProduct';
import ManageOrders from './Components/DeshBoard/ManageOrders/ManageOrders';
import MyOrders from './Components/DeshBoard/MyOrders/MyOrders';
import ManageAllProducts from './Components/DeshBoard/ManageAllProducts/ManageAllProducts';
import Payment from './Components/DeshBoard/Payment/Payment';
import MakeAdmin from './Components/DeshBoard/MakeAdmin/MakeAdmin';
import Reviews from './Components/DeshBoard/addReviews/Reviews';
import ReviewForm from './Components/DeshBoard/addReviews/ReviewForm';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import MyWishlists from './Components/MyWishlists/MyWishlists';
import BuyProducts from './Components/BuyProducts/BuyProducts';



function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route
          path="buyProducts/:id"
          element={
            <Route>
              <BuyProducts />
            </Route>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mywishlists" element={<MyWishlists />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/blogDetails1" element={<BlogDetails1 />} />
        <Route path="blog/blogDetails2" element={<BlogDetails2 />} />
        <Route path="blog/blogDetails3" element={<BlogDetails3 />} />
        <Route path="blog/blogDetails4" element={<BlogDetails4 />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="/dashboard" element={<Deshboard />}>
          <Route path="/dashboard" element={<DeshBoardHome />}></Route>
          <Route
            path="/dashboard/addnewproduct"
            element={<AddNewProduct />}
          ></Route>
          <Route
            path="/dashboard/manageorders"
            element={<ManageOrders />}
          ></Route>
          <Route path="/dashboard/myorders" element={<MyOrders />}></Route>
          <Route
            path="/dashboard/manageallproducts"
            element={<ManageAllProducts />}
          ></Route>
          <Route path="/dashboard/addreview" element={<ReviewForm />}></Route>
          <Route path="/dashboard/reviews" element={<Reviews />}></Route>
          <Route path="/dashboard/makeadmin" element={<MakeAdmin />}></Route>
          <Route path="/dashboard/payment" element={<Payment />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
