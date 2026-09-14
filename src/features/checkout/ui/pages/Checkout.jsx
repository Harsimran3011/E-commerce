import CheckoutHeader from "../components/CheckoutHeader";
import DeliveryInformation from "../components/DeliveryInformation";
import DeliveryMethod from "../components/DeliveryMethod";
import PaymentMethod from "../components/PaymentMethod";
import OrderNotes from "../components/OrderNotes";
import OrderSummary from "../components/OrderSummary";
import CheckoutFooter from "../components/CheckoutFooter";

const Checkout = () => {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= HEADER ================= */}
      <CheckoutHeader />

      {/* ================= CHECKOUT CONTENT ================= */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* ================= LEFT SIDE ================= */}
          <div className="min-w-0">
            {/* Delivery Information */}
            <DeliveryInformation />

            {/* Delivery Method */}
            <DeliveryMethod />

            {/* Payment Method */}
            <PaymentMethod />

            {/* Order Notes */}
            <OrderNotes />
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="min-w-0">
            <OrderSummary />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <CheckoutFooter />
    </main>
  );
};

export default Checkout;
