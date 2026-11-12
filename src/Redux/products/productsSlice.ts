import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import type { getApiErrorKey } from "../../Utils/api/getApiErrorKey";

type ApiErrorKey = ReturnType<typeof getApiErrorKey>;

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: ApiErrorKey | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsState>) => {
      state.items = action.payload.items;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload,
      );
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { setProducts, removeProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
