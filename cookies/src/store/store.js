
// store.js
import { createStore } from 'redux';
import rootReducer from '../reducer/cartReducer';

console.log('store State:');
const store = createStore(rootReducer);

export default store;






 // store.js
// import { createStore, combineReducers } from 'redux';
// import cartReducer from '../reducer/cartReducer'; 
// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// const store = createStore(rootReducer);
// console.log('store State:', store.getState());

// export default store;




