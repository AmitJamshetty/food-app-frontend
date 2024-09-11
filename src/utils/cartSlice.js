import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addItem: (state, action) => {  // addItem is a dispatch action, it has a reducer function in it

            // Vanilla Redux (older Redux) -> do not mutate state directly
            // newState = {...state}
            // newState.items.push(action.payload)
            // return newState

            // In Redux Toolkit, we need to mutate the state directly
            // React-Redux is a library which uses Immer (package), 
            // Immer takes a out difference's b/w prev state and new state, finally creates a new state and return it
            // mutating the state
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            // console.log("Removing item with ID:", action.payload);
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
        },

        // originalState = {items: ['Pizza']}
        clearCart:(state, action) => {
            // mutating the state
            state.items.length = 0;
            state.total = 0

            // OR state=[] -> It will replcae the originalState = {items:[]}

            // OR return {items:[]} -> This new object will replace original state => originalState = {items: []}
        },
        addTotal: (state, action) => {
            state.total = action.payload
        }
    },
})

// console.log(cartSlice);

export const {addItem, removeItem, clearCart, addTotal} = cartSlice.actions

export default cartSlice.reducer