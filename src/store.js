import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/features/auth/auth.slice";
// import ProductReducer from "@/features/product/product.slice";
import ContentBlockReducer from "@/features/contentBlock/contentBlock.slice";
import TagProductReducer from "@/features/tagProduct/tagProduct.slice";
import { productApi } from "./features/product/product.api";


export const store = configureStore({
  reducer: {
    auth: AuthReducer,

    contentBlocks: ContentBlockReducer,
    tagProducts: TagProductReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
