import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/features/auth/auth.slice";
import ProductReducer from "@/features/product/product.slice";
import ContentBlockReducer from "@/features/contentBlock/contentBlock.slice";
import TagProductReducer from "@/features/tagProduct/tagProduct.slice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductReducer,
    contentBlocks: ContentBlockReducer,
    tagProducts: TagProductReducer,
  },
});
