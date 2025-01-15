// import React from 'react'
// import Footer from '../Component/Footer';
// import Navbar from '../Component/Navbar';

// export default function MyOrder() {
//     const [orderData, setorderData] = useState({})
//   return (
//     <div>
//         <Navbar />  
//     </div>

//     <div className='container'>
//                 <div className='row'>

//                     {orderData !== {} ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{data}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>

//             <Footer />
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {

//     const [orderData, setOrderData] = useState({})

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/auth/myOrderData", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//                 email:localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json()
//             await setOrderData(response)
//         })



//         // await res.map((data)=>{
//         //    console.log(data)
//         // })


//     }

//     useEffect(() => {
//         fetchMyOrder()
//     }, [])

//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>

//             <div className='container'>
//                 <div className='row'>

//                     {orderData !== {} ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{data}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>

//             <Footer />
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null); // Initialize with null to handle loading state

    const fetchMyOrder = async () => {
        const email = localStorage.getItem('userEmail');
        if (!email) {
            console.error("User email not found in localStorage");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/auth/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                throw new Error("Failed to fetch order data");
            }

            const response = await res.json();
            setOrderData(response);

        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    if (!orderData) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    {orderData.orderData && orderData.orderData.order_data ? (
                        orderData.orderData.order_data.slice(0).reverse().map((orderItem, index) => (
                            orderItem.map((arrayData, idx) => (
                                <div key={idx} className='col-12 col-md-6 col-lg-3'>
                                    {arrayData.Order_date ? (
                                        <div className='m-auto mt-5'>
                                            <strong>Date: {arrayData.Order_date}</strong>
                                            <hr />
                                        </div>
                                    ) : (
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                            <img
                                                src={arrayData.img}
                                                className="card-img-top"
                                                alt={arrayData.name}
                                                style={{ height: "120px", objectFit: "fill" }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{arrayData.name}</h5>
                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                    <span className='m-1'>Qty: {arrayData.qty}</span>
                                                    <span className='m-1'>Size: {arrayData.size}</span>
                                                    <span className='m-1'>₹{arrayData.price}/-</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ))
                    ) : (
                        <div>No orders found.</div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
