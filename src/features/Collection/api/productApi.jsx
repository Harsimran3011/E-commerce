import { api } from "../../../config/api";

export const productApi = async () => {
  try {
    let res = await api.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("Product hook error: ", error);
    return [];
  }
};

// export const getSingleProduct = async (id) => {
//   try {
//     let res = await api.get(`products/${id}`);
//     return res;
//   } catch (error) {
//     console.log("signle product error: ", error);
//   }
// };
