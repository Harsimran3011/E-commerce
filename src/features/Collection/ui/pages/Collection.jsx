import { SlidersHorizontal } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { useSelector } from "react-redux";
import ProductGrid from "../components/ProductGrid";

const Collection = () => {
  const { products } = useSelector((store) => store.product);

  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= HERO ================= */}

      <section className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 text-center md:py-24">
          <p className="text-[10px] font-medium uppercase tracking-[4px] text-gray-400">
            Flone Collection
          </p>

          <h1 className="mt-5 text-[48px] font-light leading-none tracking-[-2px] md:text-[64px]">
            Discover
            <br />
            <span className="font-medium">Your Style</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[500px] text-[12px] leading-6 text-gray-500">
            Explore our carefully curated collection of timeless essentials,
            modern silhouettes and everyday pieces designed for effortless
            style.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY NAVIGATION ================= */}

      <section className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-8 overflow-x-auto px-5 py-7 text-[10px] uppercase tracking-[1.5px] whitespace-nowrap">
          <NavLink
            to="/collection"
            className="border-b border-black pb-2 font-medium"
          >
            All
          </NavLink>

          <NavLink
            to="/collection/men"
            className="text-gray-400 transition hover:text-black"
          >
            Men
          </NavLink>

          <NavLink
            to="/collection/women"
            className="text-gray-400 transition hover:text-black"
          >
            Women
          </NavLink>

          <NavLink
            to="/collection/accessories"
            className="text-gray-400 transition hover:text-black"
          >
            Accessories
          </NavLink>

          <NavLink
            to="/collection/footwear"
            className="text-gray-400 transition hover:text-black"
          >
            Footwear
          </NavLink>

          <NavLink
            to="/collection/new-arrivals"
            className="text-gray-400 transition hover:text-black"
          >
            New Arrivals
          </NavLink>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        {/* Toolbar */}

        <div className="mb-10 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[1.5px] text-gray-400">
            Showing {products[0].length} Products
          </p>

          <button
            type="button"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[1px] text-gray-500 transition hover:text-black"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter & Sort
          </button>
        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {products[0].map((product) => (
            <ProductGrid key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ================= PROMOTIONAL BANNER ================= */}

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto grid max-w-[1200px] items-center md:grid-cols-2">
          <div className="px-8 py-16 md:px-14">
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Made For Everyday
            </p>

            <h2 className="mt-4 text-[32px] font-light leading-tight md:text-[40px]">
              Quality pieces.
              <br />
              <span className="font-medium">Timeless style.</span>
            </h2>

            <p className="mt-5 max-w-[400px] text-[11px] leading-6 text-gray-500">
              Thoughtfully designed essentials made to fit naturally into your
              everyday wardrobe.
            </p>
          </div>

          <div className="h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="Flone collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="mx-auto max-w-[700px] px-5 py-20 text-center">
        <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
          Stay Updated
        </p>

        <h2 className="mt-3 text-[28px] font-medium">Join Our Newsletter</h2>

        <p className="mx-auto mt-4 max-w-[450px] text-[11px] leading-5 text-gray-500">
          Get updates about new collections, exclusive offers and the latest
          from Flone.
        </p>

        <div className="mx-auto mt-8 flex max-w-[500px] border-b border-gray-300">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-2 py-3 text-[11px] outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            className="px-4 text-[10px] font-medium tracking-[1px] transition hover:text-gray-500"
          >
            SUBSCRIBE
          </button>
        </div>
      </section>
      <Outlet />
    </main>
  );
};

export default Collection;
