import axios from "axios";

const API_BASE_URL = "https://test-server/api";

export const fetchProducts = async (
  company,
  category,
  minPrice,
  maxPrice,
  topN
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { company, category, minPrice, maxPrice, topN },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};
