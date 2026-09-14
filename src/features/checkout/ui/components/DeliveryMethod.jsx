import { Truck, Zap } from "lucide-react";

const DeliveryMethod = () => {
  return (
    <section className="mt-14 border-t border-gray-100 pt-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center border border-gray-200">
          <Truck size={15} strokeWidth={1.4} />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
            Step 02
          </p>

          <h2 className="mt-1 text-[20px] font-light">Delivery Method</h2>
        </div>
      </div>

      {/* ================= DELIVERY OPTIONS ================= */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* ================= STANDARD DELIVERY ================= */}
        <label className="flex cursor-pointer items-center justify-between border border-gray-200 p-5 transition-all duration-300 hover:border-black">
          <div className="flex min-w-0 items-center gap-4">
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f5f3ef]">
              <Truck size={17} strokeWidth={1.4} />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-medium">Standard Delivery</p>

                <span className="text-[9px] font-medium uppercase tracking-[0.5px] text-gray-400">
                  Free
                </span>
              </div>

              <p className="mt-1 text-[9px] leading-5 text-gray-400">
                Delivered within 5–7 business days.
              </p>
            </div>
          </div>

          {/* Normal Radio Button */}
          <input
            type="radio"
            name="delivery"
            value="standard"
            className="ml-4 h-4 w-4 shrink-0 cursor-pointer accent-black"
          />
        </label>

        {/* ================= EXPRESS DELIVERY ================= */}
        <label className="flex cursor-pointer items-center justify-between border border-gray-200 p-5 transition-all duration-300 hover:border-black">
          <div className="flex min-w-0 items-center gap-4">
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f5f3ef]">
              <Zap size={17} strokeWidth={1.4} />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-medium">Express Delivery</p>

                <span className="text-[9px] font-medium">$9.99</span>
              </div>

              <p className="mt-1 text-[9px] leading-5 text-gray-400">
                Get your order within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Normal Radio Button */}
          <input
            type="radio"
            name="delivery"
            value="express"
            className="ml-4 h-4 w-4 shrink-0 cursor-pointer accent-black"
          />
        </label>
      </div>
    </section>
  );
};

export default DeliveryMethod;
