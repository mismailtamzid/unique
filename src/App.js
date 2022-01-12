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
import Signin from './Components/Signin/Signin';
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



function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/blogDetails1" element={<BlogDetails1 />} />
        <Route path="blog/blogDetails2" element={<BlogDetails2 />} />
        <Route path="blog/blogDetails3" element={<BlogDetails3 />} />
        <Route path="blog/blogDetails4" element={<BlogDetails4 />} />
        <Route path="login" element={<Signin />} />

        <Route path="/dashboard" element={<Deshboard />}>
          <Route path="/dashboard" element={<DeshBoardHome />}></Route>
          <Route
            path="/dashboard/addnewproduct"
            element={
              <Route>
                <AddNewProduct />
              </Route>
            }
          ></Route>
          <Route
            path="/dashboard/manageorders"
            element={
              <Route>
                <ManageOrders />
              </Route>
            }
          ></Route>
          <Route path="/dashboard/myorders" element={<MyOrders />}></Route>
          <Route
            path="/dashboard/manageallproducts"
            element={
              <Route>
                <ManageAllProducts />
              </Route>
            }
          ></Route>
          <Route path="/dashboard/addreview" element={<ReviewForm />}></Route>
          <Route
            path="/dashboard/reviews"
            element={
              <Route>
                <Reviews />
              </Route>
            }
          ></Route>
          <Route
            path="/dashboard/makeadmin"
            element={
              <Route>
                <MakeAdmin />
              </Route>
            }
          ></Route>
          <Route path="/dashboard/payment" element={<Payment />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
