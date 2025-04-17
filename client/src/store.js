import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/features/auth/auth.slice";
import ProductReducer from "@/features/product/product.slice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductReducer,
  },
});
