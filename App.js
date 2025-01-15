//  import './App.css';
//  import Home from './Screen/Home';
//  import {
//    BrowserRouter as Router,
//    Routes,
//    Route,
  
//  } from "react-router-dom";
//  import Login from './Screen/Login';
//   import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
//   import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//  import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//  import SignUp from './Screen/Signup.js';
//  import { CartProvider } from './Component/ContextReducer.js';
// //  import SignUp from './Screen/Signup.js';
//  import Cart from './Screen/Cart.js';
// import MyOrder from './Screen/MyOrder.js';
 
 
//   function App() {
//      return (
//       <CartProvider>
//        <Router>
//      <div>
//       <Routes>
//        <Route exact path='/'element={<Home/>} />
//        <Route exact path='/login'element={<Login/>} />
//        <Route exact path='/createuser'element={<SignUp/>} />
//        <Route exact path='/myOrder'element={<MyOrder/>} />
      
//       </Routes>

//       </div>
//       </Router>
//       </CartProvider>

//     );
//   }

//   export default App;




import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './Screen/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
// /import { CartProvider } from './components/ContextReducer';
import { CartProvider } from './Component/ContextReducer.js';
// import MyOrder from './screens/MyOrder';
import MyOrder from './Screen/MyOrder.js';
import Cart from './Screen/Cart.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrderData" element={<MyOrder />} />
            <Route exact path='/orderData' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;