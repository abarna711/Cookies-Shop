// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
// import store from './store/store';

import { createStore } from 'redux';
import rootReducer from './reducer/cartReducer';


const store = createStore(rootReducer);


const root = createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
      <App />
  </Provider>
);



