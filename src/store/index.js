
import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from './CartStore';


const store = configureStore(
    {
        reducer: {
          cartReducer:  cartReducer,        
        }
    });   


export default store;

