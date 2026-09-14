const LoadingProducts = () => {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
      {skeletons.map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Product Image */}
          <div className="aspect-[4/5] w-full bg-gray-100" />

          {/* Product Info */}
          <div className="mt-5">
            {/* Category */}
            <div className="h-2.5 w-16 rounded-sm bg-gray-100" />

            {/* Title */}
            <div className="mt-3 h-3 w-3/4 rounded-sm bg-gray-100" />

            {/* Price + Rating */}
            <div className="mt-4 flex items-center justify-between">
              <div className="h-3 w-14 rounded-sm bg-gray-100" />

              <div className="h-2.5 w-10 rounded-sm bg-gray-100" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingProducts;
