// import React from 'react'
// import { useCart, useDispatchCart } from '../components/ContextReducer';
// import trash from "../trash.svg";

// export default function Cart() {
//     let data = useCart();
//     let dispatch = useDispatchCart();
//     const handleCheckOut = () => {
//         // Add your checkout logic here
//         alert("Checkout Successful!");
//         // Clear the cart or redirect as needed
//     };
//     if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }
//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div> <div className='container m-auto mt-5 table-responsive  table-responsive-sm  table-responsive-md'>
//     <table className='table table-hover'>
//         <thead className='text-success fs-4'>
//             <tr>
//                 <th scope='col'>#</th>
//                 <th scope='col'>Name</th>
//                 <th scope='col'>Quantity</th>
//                 <th scope='col'>Option</th>
//                 <th scope='col'>Amount</th>
//                 <th scope='col'></th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}

            
//         </tbody>
//     </table>
//     <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }

// import React from 'react'
// // import Delete from '@material-ui/icons/Delete'

// import { useCart,useDispatchCart } from '../Component/ContextReducer';

// import trash from './trash.svg';
// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }
//   // const handleRemove = (index)=>{
//   //   console.log(index)
//   //   dispatch({type:"REMOVE",index:index})
//   // }

//    const handleCheckOut = async () => {
//    let userEmail = localStorage.getItem("userEmail");
//   //   // console.log(data,localStorage.getItem("userEmail"),new Date())
//    let response = await fetch("http://localhost:5000/api/auth/orderData", {
//   //     // credentials: 'include',
//   //     // Origin:"http://localhost:3000/login",
//        method: 'POST',
   
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({
//          order_data: data,
//          email: userEmail,
//          order_date: new Date().toDateString()
//        })
//      });
//      console.log("Order RESPONSE:::::", response)
//      if (response.status === 200) {
//        dispatch({ type: "DROP" })
//        }
//     //  );
//    }

//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut}  > Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }
// import React from 'react'
// import Delete from '@material-ui/icons/Delete'
// import { useCart ,useDispatchCart } from '../Component/ContextReducer';
// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }
//   // const handleRemove = (index)=>{
//   //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

/*
  import React from 'react';
// import Delete from '@material-ui/icons/Delete';
//  import DeleteIcon from '@mui/material';
//  import DeleteIcon from '@material-ui/icons/Delete';
 import DeleteIcon from '@mui/icons-material/Delete';


import { useCart, useDispatchCart } from '../Component/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    try {
      let response = await fetch("http://localhost:5000/api/auth/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });

      if (response.status === 200) {
        dispatch({ type: "DROP" });
      } else {
        console.error("Failed to checkout. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  let totalPrice = data.reduce((total, food) => total + (food.price * food.qty), 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}> {// Added key prop }
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>
    </div>
  );
}
*/
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../Component/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    try {
      let response = await fetch("http://localhost:5000/api/auth/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });

      if (response.status === 200) {
        dispatch({ type: "DROP" });
      } else {
        console.error("Failed to checkout. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  let totalPrice = data.reduce((total, food) => total + (food.price * food.qty), 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>
    </div>
  );
}