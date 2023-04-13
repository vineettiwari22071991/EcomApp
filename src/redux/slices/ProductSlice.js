/* eslint-disable prettier/prettier */
const {createSlice} = require('@reduxjs/toolkit');
const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addPorducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const {addPorducts} = ProductSlice.actions;
export default ProductSlice.reducer;
