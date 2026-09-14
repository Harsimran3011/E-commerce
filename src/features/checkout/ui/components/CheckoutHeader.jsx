const CheckoutHeader = () => {
  return (
    <section className="bg-[#f4f2ed]">
      <div className="mx-auto max-w-[1200px] px-5 py-20 text-center md:py-28">
        <p className="text-[10px] font-medium uppercase tracking-[4px] text-gray-400">
          Complete Your Purchase
        </p>

        <h1 className="mt-5 text-[46px] font-light leading-none tracking-[-2px] md:text-[64px]">
          Checkout
        </h1>

        <p className="mx-auto mt-6 max-w-[500px] text-[11px] leading-6 text-gray-500">
          Enter your details, choose your preferred delivery method and complete
          your purchase securely.
        </p>
      </div>
    </section>
  );
};

export default CheckoutHeader;
