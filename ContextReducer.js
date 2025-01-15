
 import React, { createContext, useContext, useReducer } from 'react';



const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state, 
                {
                    id: action.id,
                    name: action.name,
                    qty: action.qty,
                    size: action.size,
                    price: action.price,
                    img: action.img
                }
            ];
        // Uncomment and use the REMOVE_FROM_CART case if needed
         case 'REMOVE':
            let newArr = [...state]
            newArr.splice(action.index,1)
            return newArr;
            case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
            case "DROP":
                let empArray = []
                return empArray
        //     return state.filter(i.sptem => item.id !== action.payload.id);
        default:
            console.log("Error in Reducer: Unknown action type");
            return state;  // Ensure the state is returned by default
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}  {/* You can leave a comment like this inside JSX */}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
