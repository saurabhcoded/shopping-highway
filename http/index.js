import axios from "axios";
const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorixation: `Bearer ${process.env.API_TOKEN}`,
  },
});

//Categories
export const fetchCategories = async () => api.get("api/categories?populate=*");
export const fetchProducts = async () => api.get("api/products?populate=*");
export const fetchBanner = async () => api.get("api/banner?populate=*");
export const fetchProductSlug = async (param) =>
  api.get(`api/products?filters[slug]=${param}`);
