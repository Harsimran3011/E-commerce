import {
  Banknote,
  Check,
  CreditCard,
  Smartphone,
} from "lucide-react";

const PaymentMethod = () => {
  return (
    <section className="mt-14 border-t border-gray-100 pt-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center border border-gray-200">
          <CreditCard size={15} strokeWidth={1.4} />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
            Step 03
          </p>

          <h2 className="mt-1 text-[20px] font-light">
            Payment Method
          </h2>
        </div>
      </div>

      {/* ================= PAYMENT OPTIONS ================= */}
      <div className="mt-8 space-y-3">

        {/* ================= COD ================= */}
        <label
          className="
            relative flex cursor-pointer items-center justify-between
            border border-gray-200 p-5
            transition-all duration-300
            hover:border-black
            has-[:checked]:border-black
          "
        >
          <input
            type="radio"
            name="payment"
            value="cod"
            className="peer sr-only"
          />

          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f5f3ef]">
              <Banknote
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <div>
              <p className="text-[11px] font-medium">
                Cash on Delivery
              </p>

              <p className="mt-1 text-[9px] leading-5 text-gray-400">
                Pay when your order arrives at your doorstep.
              </p>
            </div>
          </div>

          {/* Tick */}
          <div className="hidden h-6 w-6 shrink-0 items-center justify-center peer-checked:flex">
            <Check
              size={17}
              strokeWidth={2}
              className="text-black"
            />
          </div>
        </label>

        {/* ================= UPI ================= */}
        <label
          className="
            relative flex cursor-pointer items-center justify-between
            border border-gray-200 p-5
            transition-all duration-300
            hover:border-black
            has-[:checked]:border-black
          "
        >
          <input
            type="radio"
            name="payment"
            value="upi"
            className="peer sr-only"
          />

          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f5f3ef]">
              <Smartphone
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <div>
              <p className="text-[11px] font-medium">
                UPI
              </p>

              <p className="mt-1 text-[9px] leading-5 text-gray-400">
                Pay securely using your preferred UPI app.
              </p>
            </div>
          </div>

          {/* Tick */}
          <div className="hidden h-6 w-6 shrink-0 items-center justify-center peer-checked:flex">
            <Check
              size={17}
              strokeWidth={2}
              className="text-black"
            />
          </div>
        </label>

        {/* ================= CARD ================= */}
        <label
          className="
            relative flex cursor-pointer items-center justify-between
            border border-gray-200 p-5
            transition-all duration-300
            hover:border-black
            has-[:checked]:border-black
          "
        >
          <input
            type="radio"
            name="payment"
            value="card"
            className="peer sr-only"
          />

          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f5f3ef]">
              <CreditCard
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <div>
              <p className="text-[11px] font-medium">
                Credit / Debit Card
              </p>

              <p className="mt-1 text-[9px] leading-5 text-gray-400">
                Visa, Mastercard and other cards accepted.
              </p>
            </div>
          </div>

          {/* Tick */}
          <div className="hidden h-6 w-6 shrink-0 items-center justify-center peer-checked:flex">
            <Check
              size={17}
              strokeWidth={2}
              className="text-black"
            />
          </div>
        </label>
      </div>
    </section>
  );
};

export default PaymentMethod;