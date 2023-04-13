/* eslint-disable prettier/prettier */
const {createSlice} = require('@reduxjs/toolkit');
const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
      console.log(tempData);
    },
  },
});

export const {addItemToCart} = CartSlice.actions;
export default CartSlice.reducer;
