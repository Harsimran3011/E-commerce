import {
  ArrowRight,
  Check,
  Home,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router";

const OrderSuccess = () => {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= HERO ================= */}
      <section className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 text-center md:py-28">
          <p className="text-[10px] font-medium uppercase tracking-[4px] text-gray-400">
            Order Confirmation
          </p>

          <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
            <Check
              size={28}
              strokeWidth={1.3}
            />
          </div>

          <h1 className="mt-7 text-[42px] font-light tracking-[-2px] md:text-[60px]">
            Order Confirmed
          </h1>

          <p className="mx-auto mt-5 max-w-[480px] text-[11px] leading-6 text-gray-500">
            Thank you for your purchase. Your order has been successfully
            placed and will be processed shortly.
          </p>

          <p className="mt-6 text-[10px] uppercase tracking-[2px] text-gray-400">
            Order #FL-10245
          </p>
        </div>
      </section>

      {/* ================= ORDER DETAILS ================= */}
      <section className="mx-auto max-w-[1000px] px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Order Status */}
          <div className="border border-gray-100 p-7">
            <div className="flex h-10 w-10 items-center justify-center border border-gray-200">
              <ShoppingBag
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[2px] text-gray-400">
              Order Status
            </p>

            <h3 className="mt-2 text-[16px] font-medium">
              Order Confirmed
            </h3>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              Your order has been received and is being prepared.
            </p>
          </div>

          {/* Delivery */}
          <div className="border border-gray-100 p-7">
            <div className="flex h-10 w-10 items-center justify-center border border-gray-200">
              <Home
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[2px] text-gray-400">
              Estimated Delivery
            </p>

            <h3 className="mt-2 text-[16px] font-medium">
              3–5 Business Days
            </h3>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              You will receive your order at the provided delivery address.
            </p>
          </div>

          {/* Payment */}
          <div className="border border-gray-100 p-7">
            <div className="flex h-10 w-10 items-center justify-center border border-gray-200">
              <Check
                size={17}
                strokeWidth={1.4}
              />
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[2px] text-gray-400">
              Payment
            </p>

            <h3 className="mt-2 text-[16px] font-medium">
              Payment Confirmed
            </h3>

            <p className="mt-3 text-[10px] leading-5 text-gray-400">
              Your payment information has been securely processed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ORDER SUMMARY ================= */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-20">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Your Purchase
            </p>

            <h2 className="mt-3 text-[28px] font-light">
              Order Summary
            </h2>
          </div>

          <div className="mt-10 bg-white p-6 md:p-8">
            {/* Product 1 */}
            <div className="flex gap-4 border-b border-gray-100 pb-6">
              <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
                  alt="Essence Mascara Lash Princess"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium">
                  Essence Mascara Lash Princess
                </p>

                <p className="mt-2 text-[9px] text-gray-400">
                  Quantity: 1
                </p>
              </div>

              <p className="text-[11px] font-medium">
                $9.99
              </p>
            </div>

            {/* Product 2 */}
            <div className="flex gap-4 border-b border-gray-100 py-6">
              <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
                  alt="Eyeshadow Palette With Mirror"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium">
                  Eyeshadow Palette With Mirror
                </p>

                <p className="mt-2 text-[9px] text-gray-400">
                  Quantity: 1
                </p>
              </div>

              <p className="text-[11px] font-medium">
                $19.99
              </p>
            </div>

            {/* Total */}
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">
                    Subtotal
                  </span>
                  <span>$29.98</span>
                </div>

                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">
                    Shipping
                  </span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">
                    Tax
                  </span>
                  <span>$2.99</span>
                </div>
              </div>

              <div className="my-6 h-px bg-gray-100" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[1.5px]">
                  Total
                </span>

                <span className="text-[24px] font-medium">
                  $32.97
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIONS ================= */}
      <section className="mx-auto max-w-[700px] px-5 py-16 text-center md:py-20">
        <h2 className="text-[25px] font-light">
          Thank You For Shopping With Us
        </h2>

        <p className="mx-auto mt-4 max-w-[450px] text-[10px] leading-5 text-gray-400">
          We appreciate your order and hope you enjoy your purchase.
          Keep exploring our collection for more timeless pieces.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/collection"
            className="flex h-11 w-full items-center justify-center gap-3 bg-black px-8 text-[10px] font-medium uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#333] sm:w-auto"
          >
            Continue Shopping
            <ArrowRight
              size={14}
              strokeWidth={1.5}
            />
          </Link>

          <Link
            to="/"
            className="flex h-11 w-full items-center justify-center gap-3 border border-gray-200 bg-white px-8 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-600 transition-all duration-300 hover:border-black hover:text-black sm:w-auto"
          >
            <Home
              size={13}
              strokeWidth={1.5}
            />
            Back To Home
          </Link>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="border-t border-gray-100 px-5 py-8 text-center">
        <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
          Thank you for choosing Flone
        </p>
      </div>
    </main>
  );
};

export default OrderSuccess;