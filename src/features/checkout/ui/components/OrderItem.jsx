const OrderItem = ({
  image,
  title,
  quantity,
  price,
}) => {
  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#f5f5f5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium text-[#222]">
          {title}
        </p>

        <p className="mt-2 text-[9px] text-gray-400">
          Quantity: {quantity}
        </p>

        <p className="mt-2 text-[10px] text-gray-400">
          Product Price: ${Number(price || 0).toFixed(2)}
        </p>
      </div>

      {/* Product Total */}
      <div className="shrink-0">
        <p className="text-[11px] font-medium">
          ${(Number(price || 0) * Number(quantity || 1)).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;