import product1 from "../image/item1.jpg";
import product2 from "../image/item2.jpg";
import product3 from "../image/item5.jpg";

const initialState = {
  products: [
    {
      id: 1,
      name: "Cocunt Choco Cookies",
      price: 200,
      quantity: 1,
      image: product1,

  },
  {
      id: 2,
      name: "Oats Almond Cookies",
      price: 350,
      quantity: 1,
      image: product2,

  },
  {
      id: 3,
      name: "Choco Chips Cookies",
      price: 399,
      quantity: 1,
      image: product3,

  }
  ],
  cart: []
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: 0 }
            : product
        ),
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    case 'INCREMENT_QUANTITY':
      const updatedCartIncrement = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        cart: updatedCartIncrement
      }

    case 'DECREMENT_QUANTITY':
      const updatedCartDecrement = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);

      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
        cart: updatedCartDecrement
      }

    default:
      return state
  }
}
export default cartReducer;

