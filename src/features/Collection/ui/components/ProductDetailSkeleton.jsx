const ProductDetailSkeleton = () => {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="grid animate-pulse gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE ================= */}
          <div>
            <div className="aspect-[4/5] w-full bg-gray-100" />

            {/* Thumbnail Skeletons */}
            <div className="mt-5 flex gap-3">
              <div className="h-20 w-16 bg-gray-100" />
              <div className="h-20 w-16 bg-gray-100" />
              <div className="h-20 w-16 bg-gray-100" />
            </div>
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <div className="h-2.5 w-20 rounded-sm bg-gray-100" />

            {/* Title */}
            <div className="mt-5 h-7 w-3/4 rounded-sm bg-gray-100" />
            <div className="mt-3 h-7 w-1/2 rounded-sm bg-gray-100" />

            {/* Rating */}
            <div className="mt-5 h-3 w-24 rounded-sm bg-gray-100" />

            {/* Price */}
            <div className="mt-7 h-6 w-24 rounded-sm bg-gray-100" />

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gray-100" />

            {/* Description */}
            <div className="space-y-3">
              <div className="h-2.5 w-full rounded-sm bg-gray-100" />
              <div className="h-2.5 w-full rounded-sm bg-gray-100" />
              <div className="h-2.5 w-4/5 rounded-sm bg-gray-100" />
            </div>

            {/* Quantity */}
            <div className="mt-8 h-10 w-32 bg-gray-100" />

            {/* Add To Cart */}
            <div className="mt-5 h-12 w-full bg-gray-100" />

            {/* Extra Info */}
            <div className="mt-8 space-y-4">
              <div className="h-2.5 w-48 rounded-sm bg-gray-100" />
              <div className="h-2.5 w-56 rounded-sm bg-gray-100" />
              <div className="h-2.5 w-44 rounded-sm bg-gray-100" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailSkeleton;
