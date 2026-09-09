import { api } from "../../../config/api";

export const getAllProductsApi = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : `/products`;
    let res = await api.get(url);
    return res.data.products;
  } catch (error) {
    console.log("Products Api error: ", error);
  }
};

export const getAllCategories = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Categories Api error: ", error);
  }
};

export const getProductByCategories = async (categoryFilter) => {
  try {
    let url = `/products/category/${categoryFilter}`;
    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("Product by Categories Api error: ", error);
  }
};

export const getDetailedProduct = async (id) => {
  try {
    let res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log("Categories Api error: ", error);
  }
};
