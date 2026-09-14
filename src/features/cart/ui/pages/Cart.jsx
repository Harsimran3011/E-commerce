import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../../hooks/useCart";
import {
  decrementQty,
  incrementQty,
  removeCartItem,
} from "../../state/cartSlice";

const Cart = () => {
  let { cartItems, subtotal, totalItems, dispatch, navigate } = useCart();

  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= CART HEADER ================= */}
      <section className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 text-center md:py-20">
          <p className="text-[10px] font-medium uppercase tracking-[4px] text-gray-400">
            Your Selection
          </p>

          <h1 className="mt-4 text-[46px] font-light tracking-[-2px] md:text-[60px]">
            Shopping Cart
          </h1>

          <p className="mx-auto mt-5 max-w-[450px] text-[11px] leading-6 text-gray-500">
            Review your selected pieces and make your order ready for checkout.
          </p>
        </div>
      </section>

      {/* ================= CART CONTENT ================= */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        {cartItems.length === 0 ? (
          /* ================= EMPTY CART ================= */
          <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center border border-gray-200">
              <ShoppingBag
                size={22}
                strokeWidth={1.3}
                className="text-gray-400"
              />
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[3px] text-gray-400">
              Your cart is empty
            </p>

            <h2 className="mt-3 text-[28px] font-light">Nothing here yet.</h2>

            <p className="mt-3 max-w-[350px] text-[11px] leading-6 text-gray-400">
              Discover something you love and add it to your shopping bag.
            </p>

            <Link
              to="/collection"
              className="mt-8 flex h-11 items-center gap-3 bg-black px-8 text-[10px] font-medium uppercase tracking-[1.5px] text-white transition hover:bg-gray-800"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* ================= CART ITEMS ================= */}
            <div>
              <div className="hidden grid-cols-[2fr_1fr_1fr_40px] border-b border-gray-200 pb-4 text-[9px] uppercase tracking-[2px] text-gray-400 md:grid">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span />
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-5 py-7 md:grid-cols-[2fr_1fr_1fr_40px] md:items-center"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-5">
                      <div className="h-28 w-24 overflow-hidden bg-[#f5f5f5]">
                        <img
                          src={item.thumbnail || item.images?.[0]}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                          {item.brand || item.category}
                        </p>

                        <h3 className="mt-2 text-[13px] font-medium">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[10px] text-gray-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <p className="text-[12px] font-medium">
                        ${item?.price?.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div>
                      <div className="flex h-10 w-fit border border-gray-200">
                        <button
                          onClick={() => dispatch(decrementQty(item))}
                          type="button"
                          className="flex w-10 items-center justify-center transition hover:bg-gray-50"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>

                        <span className="flex w-10 items-center justify-center border-x border-gray-200 text-[11px]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch(incrementQty(item))}
                          type="button"
                          className="flex w-10 items-center justify-center transition hover:bg-gray-50"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(removeCartItem(item.id))}
                      type="button"
                      className="flex h-8 w-8 items-center justify-center text-gray-400 transition hover:text-black"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                ))}
              </div>

              <Link
                to="/collection"
                className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[1.5px] text-gray-400 transition hover:text-black"
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                Continue Shopping
              </Link>
            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <aside className="h-fit bg-[#f5f3ef] p-7 md:p-9">
              <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
                Order Summary
              </p>

              <h2 className="mt-4 text-[27px] font-light">Your Order</h2>

              <div className="my-7 h-px bg-gray-200" />

              <div className="space-y-5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">Items</span>

                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">Subtotal</span>

                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">Shipping</span>

                  <span>Free</span>
                </div>
              </div>

              <div className="my-7 h-px bg-gray-200" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[1.5px]">
                  Total
                </span>

                <span className="text-[22px] font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                type="button"
                className="mt-8 flex h-12 w-full items-center justify-center gap-3 bg-black text-[10px] font-medium uppercase tracking-[1.5px] text-white transition hover:bg-gray-800"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                Proceed To Checkout
              </button>

              <p className="mt-5 text-center text-[9px] leading-5 text-gray-400">
                Secure checkout · Free shipping · Easy returns
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
