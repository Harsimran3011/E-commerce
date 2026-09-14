import { LockKeyhole, ShoppingBag } from "lucide-react";

import OrderItem from "./OrderItem";
import { useCart } from "../../../cart/hooks/useCart";
import { removeAllItems } from "../../../cart/state/cartSlice";

const OrderSummary = () => {
  let { navigate, dispatch } = useCart();

  return (
    <aside className="h-fit bg-[#f5f3ef] p-7 md:p-9 lg:sticky lg:top-24">
      {/* Header */}
      <div className="flex items-center gap-3">
        <ShoppingBag size={17} strokeWidth={1.4} />

        <div>
          <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
            Your Cart
          </p>

          <h2 className="mt-1 text-[21px] font-light">Order Summary</h2>
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-gray-200" />

      {/* Order Items */}
      <div className="space-y-6">
        <OrderItem
          image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
          title="Essence Mascara Lash Princess"
          quantity={1}
          price={9.99}
        />

        <OrderItem
          image="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
          title="Eyeshadow Palette With Mirror"
          quantity={1}
          price={19.99}
        />
      </div>

      {/* Price Divider */}
      <div className="my-7 h-px bg-gray-200" />

      {/* Price Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-400">Subtotal</span>

          <span>$29.98</span>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-400">Shipping</span>

          <span>Free</span>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-400">Tax</span>

          <span>$2.99</span>
        </div>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-400">Discount</span>

          <span className="text-gray-500">—</span>
        </div>
      </div>

      {/* Total Divider */}
      <div className="my-7 h-px bg-gray-200" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-[1.5px]">
          Total
        </span>

        <span className="text-[24px] font-medium">$32.97</span>
      </div>

      {/* Place Order */}
      <button
        onClick={() => {
          navigate("/order-success");
          dispatch(removeAllItems());
        }}
        type="button"
        className="mt-8 flex h-12 w-full cursor-pointer items-center justify-center gap-3 bg-black text-[10px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#333] active:scale-[0.99]"
      >
        <ShoppingBag size={15} strokeWidth={1.5} />
        Place Order
      </button>

      {/* Security */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <LockKeyhole size={11} strokeWidth={1.5} className="text-gray-400" />

        <p className="text-[8px] uppercase tracking-[1.2px] text-gray-400">
          Secure Checkout
        </p>
      </div>

      <p className="mt-3 text-center text-[8px] leading-5 text-gray-400">
        Your payment information is securely protected.
      </p>
    </aside>
  );
};

export default OrderSummary;
