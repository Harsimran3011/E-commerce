import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* Hero Section */}

      <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[#f4f2ed]">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-[1200px] items-center px-5 md:grid-cols-2">
          {/* Content */}

          <div className="z-10 py-20 md:py-0">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[4px] text-gray-500">
              New Collection 2026
            </p>

            <h1 className="max-w-[600px] text-[48px] font-light leading-[1.05] tracking-[-2px] sm:text-[60px] md:text-[68px]">
              Style That
              <br />
              <span className="font-medium">Speaks For You</span>
            </h1>

            <p className="mt-6 max-w-[430px] text-[13px] leading-6 text-gray-500">
              Discover timeless fashion designed for modern living. Premium
              essentials, effortless style and pieces made to become part of
              your everyday wardrobe.
            </p>

            <div className="mt-9 flex items-center gap-5">
              <button
                onClick={() => navigate("/collection")}
                className="flex items-center gap-3 cursor-pointer bg-black px-8 py-4 text-[10px] font-medium tracking-[1px] text-white transition duration-300 hover:bg-gray-800"
              >
                SHOP COLLECTION
                <ArrowRight size={14} />
              </button>

              <span className="text-[10px] uppercase tracking-[2px] text-gray-500">
                Explore
              </span>
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative h-[500px] md:h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-white px-6 py-5">
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Featured
              </p>

              <p className="mt-1 text-[13px] font-medium">Minimal Collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}

      <section className="border-b border-gray-100">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
          <div className="border-b border-gray-100 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
              Category
            </p>

            <h3 className="mt-2 text-[15px] font-medium">Men's Fashion</h3>
          </div>

          <div className="border-b border-gray-100 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
              Category
            </p>

            <h3 className="mt-2 text-[15px] font-medium">Women's Fashion</h3>
          </div>

          <div className="border-r-0 border-b border-gray-100 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
              Category
            </p>

            <h3 className="mt-2 text-[15px] font-medium">Accessories</h3>
          </div>

          <div className="px-6 py-8">
            <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
              Category
            </p>

            <h3 className="mt-2 text-[15px] font-medium">Footwear</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}

      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="mb-12 text-center">
          <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
            Our Selection
          </p>

          <h2 className="mt-3 text-[30px] font-medium tracking-[-1px]">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-[450px] text-[12px] leading-5 text-gray-500">
            Carefully selected pieces created to bring simplicity, comfort and
            character to your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {/* Product 1 */}

          <div className="group">
            <div className="h-[300px] overflow-hidden bg-[#f5f5f5]">
              <img
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
                alt="Classic shirt"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[1px] text-gray-400">
              Men's Wear
            </p>

            <h3 className="mt-1 text-[12px] font-medium">
              Classic Cotton Shirt
            </h3>

            <p className="mt-2 text-[12px]">$45.00</p>
          </div>

          {/* Product 2 */}

          <div className="group">
            <div className="h-[300px] overflow-hidden bg-[#f5f5f5]">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80"
                alt="White shirt"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[1px] text-gray-400">
              Men's Wear
            </p>

            <h3 className="mt-1 text-[12px] font-medium">
              Oversized White Shirt
            </h3>

            <p className="mt-2 text-[12px]">$55.00</p>
          </div>

          {/* Product 3 */}

          <div className="group">
            <div className="h-[300px] overflow-hidden bg-[#f5f5f5]">
              <img
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
                alt="Blue jeans"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[1px] text-gray-400">
              Denim
            </p>

            <h3 className="mt-1 text-[12px] font-medium">
              Straight Blue Jeans
            </h3>

            <p className="mt-2 text-[12px]">$70.00</p>
          </div>

          {/* Product 4 */}

          <div className="group">
            <div className="h-[300px] overflow-hidden bg-[#f5f5f5]">
              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"
                alt="Denim jacket"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[1px] text-gray-400">
              Jackets
            </p>

            <h3 className="mt-1 text-[12px] font-medium">
              Premium Denim Jacket
            </h3>

            <p className="mt-2 text-[12px]">$85.00</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto grid max-w-[1200px] items-center md:grid-cols-2">
          <div className="px-8 py-20 md:px-16">
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Designed For You
            </p>

            <h2 className="mt-4 text-[36px] font-light leading-tight">
              Less noise.
              <br />
              <span className="font-medium">More style.</span>
            </h2>

            <p className="mt-5 max-w-[400px] text-[12px] leading-6 text-gray-500">
              Build a wardrobe around pieces that never go out of style. Simple
              shapes, refined details and quality materials.
            </p>

            <button onClick={() => navigate("/blog")} className="mt-8 border border-black px-8 py-3 text-[10px] font-medium tracking-[1px] transition duration-300 hover:bg-black hover:text-white">
              DISCOVER MORE
            </button>
          </div>

          <div className="h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion store"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}

      <section className="mx-auto max-w-[700px] px-5 py-20 text-center">
        <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
          Stay Updated
        </p>

        <h2 className="mt-3 text-[28px] font-medium">Join Our Newsletter</h2>

        <p className="mx-auto mt-4 max-w-[450px] text-[11px] leading-5 text-gray-500">
          Subscribe to receive updates about new collections, exclusive offers
          and fashion inspiration.
        </p>

        <div className="mx-auto mt-8 flex max-w-[500px] border-b border-gray-300">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-2 py-3 text-[11px] outline-none placeholder:text-gray-400"
          />

          <button className="px-4 text-[10px] font-medium tracking-[1px]">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
