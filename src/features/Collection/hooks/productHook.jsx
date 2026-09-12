import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProductsApi,
  getDetailedProduct,
  getProductByCategories,
} from "../api/productApi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const useAllProducts = () => {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState(null);

  const limit = 50;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 700);

    return () => clearTimeout(timeout);
  }, [search]);

  const {
    data,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["allProducts", debounceSearch],

    queryFn: ({ pageParam }) =>
      getAllProductsApi(pageParam, debounceSearch, limit),

    initialPageParam: 0,
    placeholderData: keepPreviousData,

    getNextPageParam: (lastPage, allPages) => {
      const loadedProducts = allPages.length * limit;

      if (loadedProducts >= lastPage.total) {
        return undefined;
      }

      return loadedProducts;
    },
  });

  return {
    data,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
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

  const { data, isFetching } = useQuery({
    queryKey: ["productCategory", categoryFilter],
    queryFn: () => getProductByCategories(categoryFilter),
    enabled: categoryFilter !== "all",
  });

  return {
    data,
    categoryFilter,
    setCategoryFilter,
    isFetching,
  };
};

export const useDetailedProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  let { data } = useQuery({
    queryKey: ["detailedProduct"],
    queryFn: () => getDetailedProduct(id),
  });

  return { data, navigate, imageLoaded, setImageLoaded };
};
