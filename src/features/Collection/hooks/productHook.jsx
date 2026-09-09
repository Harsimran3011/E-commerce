import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProductsApi,
  getDetailedProduct,
  getProductByCategories,
} from "../api/productApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounce(search);
    }, 700);

    return () => clearTimeout(timeout);
  }, [search]);

  let { data, isLoading, error } = useQuery({
    queryKey: ["allProducts", debounce],
    queryFn: () => getAllProductsApi(debounce),
    staleTime: 4000,
  });

  return {
    data,
    isLoading,
    error,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
  });
};

export const useProductByCategory = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  console.log("catefilter = ", categoryFilter);

  const { data } = useQuery({
    queryKey: ["productCategory", categoryFilter],
    queryFn: () => getProductByCategories(categoryFilter),
    enabled: categoryFilter !== "all",
  });

  console.log("data ===> ", data);

  return {
    data,
    categoryFilter,
    setCategoryFilter,
  };
};

export const useDetailedProduct = () => {
  const { id } = useParams();

  let { data } = useQuery({
    queryKey: ["detailedProduct"],
    queryFn: () => getDetailedProduct(id),
  });

  console.log("details ===> ", data);

  return { data };
};
