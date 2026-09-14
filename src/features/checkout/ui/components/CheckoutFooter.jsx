import { ArrowLeft, CheckCircle, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router";

const CheckoutFooter = () => {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        {/* Back To Cart */}
        <div className="flex justify-center">
          <Link
            to="/cart"
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[1.5px] text-gray-400 transition-colors duration-300 hover:text-black"
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back To Cart
          </Link>
        </div>

        {/* Trust Features */}
        <div className="mx-auto mt-10 grid max-w-[800px] gap-6 border-t border-gray-100 pt-8 sm:grid-cols-3">
          {/* Secure Payment */}
          <div className="flex items-center justify-center gap-3 text-center sm:flex-col">
            <ShieldCheck
              size={18}
              strokeWidth={1.3}
              className="shrink-0 text-gray-500"
            />

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[1.5px]">
                Secure Payment
              </p>

              <p className="mt-1 text-[8px] text-gray-400">
                Your payment is protected
              </p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-center justify-center gap-3 text-center sm:flex-col">
            <Truck
              size={18}
              strokeWidth={1.3}
              className="shrink-0 text-gray-500"
            />

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[1.5px]">
                Fast Delivery
              </p>

              <p className="mt-1 text-[8px] text-gray-400">
                Quick and reliable shipping
              </p>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="flex items-center justify-center gap-3 text-center sm:flex-col">
            <CheckCircle
              size={18}
              strokeWidth={1.3}
              className="shrink-0 text-gray-500"
            />

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[1.5px]">
                Easy Returns
              </p>

              <p className="mt-1 text-[8px] text-gray-400">
                Simple return process
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-[8px] uppercase tracking-[2px] text-gray-400">
            Thank you for choosing Flone
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFooter;
