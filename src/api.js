import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};