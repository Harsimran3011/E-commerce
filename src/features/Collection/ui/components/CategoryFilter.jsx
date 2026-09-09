import { SlidersHorizontal } from "lucide-react";

const CategoryFilter = ({ categories, categoryFilter, setCategoryFilter }) => {
  return (
    <div className="flex items-center gap-2">
      <SlidersHorizontal
        size={14}
        strokeWidth={1.5}
        className="text-gray-400"
      />

      <div className="relative">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="cursor-pointer appearance-none border border-gray-200 bg-white px-4 py-2.5 pr-9 text-[10px] uppercase tracking-[1px] text-gray-500 outline-none transition-all duration-300 hover:border-gray-400 focus:border-gray-400"
        >
          <option value="all">All Categories</option>

          {categories?.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
