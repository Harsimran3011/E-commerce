const LoadingProducts = () => {
  return (
    <main className="min-h-screen bg-white pt-20 text-[#222]">
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="flex flex-col items-center text-center">
          {/* Loader */}
          <div className="relative mb-8 h-12 w-12">
            <div className="absolute inset-0 rounded-full border border-gray-200" />

            <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-black" />
          </div>

          {/* Text */}
          <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
            Please wait
          </p>

          <h1 className="mt-3 text-[22px] font-light tracking-tight">
            Loading Product
          </h1>

          <p className="mt-3 max-w-[300px] text-[11px] leading-5 text-gray-400">
            We're preparing the product details for you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoadingProducts;
