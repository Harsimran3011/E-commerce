import { MapPin } from "lucide-react";

const DeliveryInformation = () => {
  return (
    <section>
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center border border-gray-200">
          <MapPin size={15} strokeWidth={1.4} />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
            Step 01
          </p>

          <h2 className="mt-1 text-[20px] font-light">Delivery Information</h2>
        </div>
      </div>

      {/* Form UI */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            First Name
          </label>

          <input
            type="text"
            placeholder="Enter first name"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Enter last name"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter phone number"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Address
          </label>

          <input
            type="text"
            placeholder="Street address"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* City */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* State */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            State
          </label>

          <input
            type="text"
            placeholder="State"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Pincode
          </label>

          <input
            type="text"
            placeholder="Pincode"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>

        {/* Country */}
        <div>
          <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
            Country
          </label>

          <input
            type="text"
            placeholder="Country"
            className="mt-2 h-11 w-full border-b border-gray-200 bg-transparent px-1 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliveryInformation;
