// import React, { useState } from 'react'
// import { useDispatchCart, useCart } from './ContextReducer';
// export default function Card(props) {
// let dispatch = useDispatchCart();
// let data = useCart()
//     let options = props.options;
//     let priceOptions = Object.keys(options);
//     const [qty, setQty] = useState(1)
//     const [size,setSize] = useState("")
//     // let filterItem = props.filterItems;
//     const handleAddToCart =async ()=>{
//          await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name,price:props.finalPrice, qty:qty,size:size})
//          console.log(data)
//     }
//     return (
//         <div>
//             <div>
//                 <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
//                     <div className="card-body">
//                         <h5 className="card-title">{props.foodItem.name}</h5>
//                         <div className='container w-100'>
//                             <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
//                                 {Array.from(Array(6), (e, i) => {
//                                     return (
//                                         <option key={i + 1} value={i + 1}> {i + 1}</option>
//                                     )
//                                 })}
//                             </select>
//                             <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setSize(e.target.value)}>
//                                   {/* <option value="half">Half</option>
//                                 <option value="full">Full</option>   */}
//                                 {priceOptions.map((data)=>{
//                                     return <option key={data} value={data}>{data}</option>
//                                 })}
//                             </select>
//                             <div className='d-inline h-100 fs-5'>
//                             Total Price
//                             </div>
//                         </div>
//                         <hr>

//                         </hr>
//                         <button className={'btn btn-success justify-center ms-2'}onClick={handleAddToCart}>Add To Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    
    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1); // Default quantity is 1
    const [size, setSize] = useState(priceOptions[0]); // Default size is the first option

    // Calculate the total price based on the selected size and quantity
    const finalPrice = qty * parseInt(options[size]);

    const handleAddToCart = async () => {
        let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id:props.foodItem._id, price: finalPrice, qty: qty })
          return
        }
        else if (food.size !== size) {
            await dispatch({ type: "ADD", id:props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
            return
        
        // await dispatch({
        //     type: "ADD_TO_CART", // Match the action type used in your reducer
        //     id: props.foodItem._id,
        //     name: props.foodItem.name,
        //     price: finalPrice,
        //     qty: qty,
        //     size: size,
        //     img: props.foodItem.img
        // });
    //    await console.log(data);
    }
    return
}
    await dispatch({ type: "ADD", id:props.foodItem._id, name:props.foodItem.name, price: finalPrice, qty: qty, size: size })
}
        

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    );
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>;
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                 ₹{finalPrice} /-
                            </div>
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

