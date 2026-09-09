import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useDetailedProduct } from "../../hooks/productHook";

const ProductDetails = () => {
  const { data } = useDetailedProduct();

  const product = data;
  console.log("product ===> ", product);

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-[#222]">
        <section className="mx-auto max-w-[1200px] px-5 py-20 text-center">
          <h1 className="text-2xl font-medium">Product not found</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= BREADCRUMB ================= */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-5 py-5">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[1.5px] text-gray-400">
            <span>Collection</span>
            <span>/</span>
            <span className="text-gray-600">{product.category}</span>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= PRODUCT IMAGE ================= */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Wishlist */}
            <button
              type="button"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center bg-white shadow-sm transition hover:bg-black hover:text-white"
            >
              <Heart size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* ================= PRODUCT INFORMATION ================= */}
          <div className="flex flex-col justify-center">
            {/* Brand */}
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              {product.brand}
            </p>

            {/* Product Title */}
            <h1 className="mt-4 max-w-[550px] text-[38px] font-light leading-tight tracking-[-1.5px] md:text-[52px]">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    strokeWidth={1.5}
                    className={
                      star <= Math.round(product.rating)
                        ? "fill-black"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <span className="text-[10px] text-gray-400">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">
              <span className="text-[22px] font-medium">${product.price}</span>

              <span className="text-[10px] uppercase tracking-[1px] text-gray-400">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gray-100" />

            {/* Description */}
            <p className="max-w-[520px] text-[12px] leading-6 text-gray-500">
              {product.description}
            </p>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-[10px] uppercase tracking-[1px] text-gray-500">
                {product.availabilityStatus}
              </span>

              <span className="text-[10px] text-gray-400">
                • {product.stock} available
              </span>
            </div>

            {/* Quantity */}
            <div className="mt-7 flex items-center gap-5">
              <span className="text-[10px] uppercase tracking-[1px] text-gray-400">
                Quantity
              </span>

              <div className="flex h-11 border border-gray-200">
                <button
                  type="button"
                  className="flex w-10 items-center justify-center transition hover:bg-gray-50"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>

                <span className="flex w-10 items-center justify-center border-x border-gray-200 text-[12px]">
                  1
                </span>

                <button
                  type="button"
                  className="flex w-10 items-center justify-center transition hover:bg-gray-50"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add To Cart */}
            <button
              type="button"
              className="mt-8 flex h-12 w-full items-center justify-center gap-3 bg-black text-[10px] font-medium tracking-[1.5px] text-white transition hover:bg-gray-800 sm:w-[300px]"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              ADD TO CART
            </button>

            {/* Shipping */}
            <div className="mt-7 space-y-3 border-t border-gray-100 pt-6">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-400">Shipping</span>

                <span>{product.shippingInformation}</span>
              </div>

              <div className="flex justify-between text-[10px]">
                <span className="text-gray-400">Warranty</span>

                <span>{product.warrantyInformation}</span>
              </div>

              <div className="flex justify-between text-[10px]">
                <span className="text-gray-400">Returns</span>

                <span>{product.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DESCRIPTION ================= */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
                Product Details
              </p>

              <h2 className="mt-4 text-[28px] font-light">
                Made for everyday beauty.
              </h2>
            </div>

            <div>
              <p className="text-[12px] leading-7 text-gray-500">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT META ================= */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                SKU
              </p>

              <p className="mt-2 text-[11px]">{product.sku}</p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Category
              </p>

              <p className="mt-2 text-[11px]">{product.category}</p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Minimum Order
              </p>

              <p className="mt-2 text-[11px]">
                {product.minimumOrderQuantity} units
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Stock
              </p>

              <p className="mt-2 text-[11px]">{product.stock} units</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BACK TO COLLECTION ================= */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-[1200px] px-5 py-8">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[1.5px] text-gray-400">
            <ArrowLeft size={13} strokeWidth={1.5} />
            Back to Collection
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
