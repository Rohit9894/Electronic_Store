export const getProducts = async () => {
    try {
      const response = await axiosInstance.post("/product/products",);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };
  