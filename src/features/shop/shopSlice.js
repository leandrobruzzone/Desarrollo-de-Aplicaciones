import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products: [],
      categories: [],
      categorySelected: "",
      productIdSelected: null,
      productsFilteredByCategory: [],
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      const allProducts = state.value.products;
      const allCategories = state.value.categories;

      const productsFiltered = allProducts.filter(
        (product) => product.category === categorySelected
      );
      state.value.categorySelected = categorySelected;
      state.value.productsFilteredByCategory = productsFiltered;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
    setInitialData: (state, action) => {
      const { products, categories } = action.payload;
      state.value.products = products;
      state.value.categories = categories;
    },
  },
});

export const { setCategorySelected, setProductIdSelected, setInitialData } =
  shopSlice.actions;

export default shopSlice.reducer;
