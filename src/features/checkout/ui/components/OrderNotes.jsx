import { FileText } from "lucide-react";

const OrderNotes = () => {
  return (
    <section className="mt-14 border-t border-gray-100 pt-10">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center border border-gray-200">
          <FileText size={15} strokeWidth={1.4} />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
            Optional
          </p>

          <h2 className="mt-1 text-[20px] font-light">Order Notes</h2>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-8">
        <label className="text-[9px] uppercase tracking-[1.5px] text-gray-400">
          Additional Information
        </label>

        <textarea
          rows={5}
          placeholder="Add a note about your order..."
          className="mt-3 w-full resize-none border border-gray-200 bg-transparent p-4 text-[11px] leading-5 outline-none transition focus:border-black placeholder:text-gray-400"
        />
      </div>

      <p className="mt-2 text-[8px] text-gray-400">
        You can add delivery instructions or any special requests here.
      </p>
    </section>
  );
};

export default OrderNotes;
