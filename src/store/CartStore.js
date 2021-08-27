import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],//{ title: 'lego', price: 10, quantity: 1 }
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const index = state.cartItems.findIndex((item) => item.title === action.payload.title)
            if (index > -1) {
                state.cartItems[index].quantity += 1;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart(state, action) {
            const index = state.cartItems.findIndex((item) => item.title === action.payload.title)
            if (index > -1) {               
                if (state.cartItems[index].quantity > 1)
                    state.cartItems[index].quantity -= 1;
                else {
                    const filteredItems = state.cartItems.filter(
                        (item) => { return item.title !== action.payload.title })
                    if (filteredItems.length > 0)
                        state.cartItems = filteredItems;
                    else {
                        state.cartItems = [];
                    }
                }
            } else {
                return;
            }
        },
        displayCart(state) {
            state.showCart = true;
        },
        hideCart(state) {
            state.showCart = false;
        }
    }

});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;