import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

const ProductGrid = ({ product }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/collection/${product.id}`)}
      className="group"
    >
      {/* ================= PRODUCT IMAGE ================= */}

      <div className="relative h-[300px] overflow-hidden bg-[#f5f5f5]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}

        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white opacity-0 shadow-sm transition duration-300 group-hover:opacity-100"
        >
          <Heart size={15} strokeWidth={1.5} />
        </button>

        {/* Add To Cart */}

        <button
          type="button"
          className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center gap-2 bg-black py-3 text-[9px] font-medium tracking-[1px] text-white transition duration-300 group-hover:translate-y-0"
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          ADD TO CART
        </button>
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}

      <div className="pt-4">
        {/* Category */}

        <p className="text-[9px] uppercase tracking-[1px] text-gray-400">
          {product.category}
        </p>

        {/* Product Name */}

        <h3 className="mt-2 text-[13px] font-medium">{product.title}</h3>

        {/* Price */}

        <p className="mt-2 text-[12px]">${product.price}</p>
      </div>
    </article>
  );
};

export default ProductGrid;
