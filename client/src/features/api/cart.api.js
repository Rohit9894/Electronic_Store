import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_PRODUCT_BASEURL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    credentials: "include",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: (query) => ({
        url: "cart",
        params: query,
      }),
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: "cart/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    updateQuantity: builder.mutation({
      query: ({ productId, action }) => ({
        url: "cart/update-quantity",
        method: "PATCH",
        body: { productId, action },
      }),
      invalidatesTags: ["cart"],
    }),
    deleteProductFromCart: builder.mutation({
      query: (productId) => ({
        url: `cart/delete-product/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddToCartMutation,
  useUpdateQuantityMutation,
  useDeleteProductFromCartMutation,
} = cartApi;
