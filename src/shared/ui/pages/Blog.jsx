import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How to Build a Timeless Wardrobe",
      category: "Fashion",
      date: "September 06, 2026",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
      description:
        "Discover simple ways to create a wardrobe filled with versatile pieces that work for every occasion.",
    },
    {
      title: "The Art of Minimal Style",
      category: "Lifestyle",
      date: "August 28, 2026",
      image:
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",
      description:
        "Minimal fashion is about choosing better, not simply choosing less. Explore the principles behind effortless style.",
    },
    {
      title: "What to Wear This Season",
      category: "Trends",
      date: "August 18, 2026",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
      description:
        "From relaxed silhouettes to refined essentials, discover the pieces shaping this season's wardrobe.",
    },
    {
      title: "Choosing Quality Over Quantity",
      category: "Style Guide",
      date: "August 10, 2026",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
      description:
        "Learn how investing in quality materials and timeless designs can transform the way you shop.",
    },
    {
      title: "The Essentials Every Man Needs",
      category: "Men's Fashion",
      date: "July 30, 2026",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=85",
      description:
        "A practical guide to the essential pieces that form the foundation of a modern men's wardrobe.",
    },
    {
      title: "Simple Looks for Everyday Life",
      category: "Lifestyle",
      date: "July 22, 2026",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      description:
        "Easy combinations, neutral tones and comfortable silhouettes for your everyday style.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= FEATURED POST ================= */}

      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
            Featured Story
          </p>

          <h2 className="mt-3 text-[28px] font-medium">
            Latest From Our Journal
          </h2>
        </div>

        <article className="grid overflow-hidden bg-[#f5f3ef] md:grid-cols-2">
          <div className="h-[350px] md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85"
              alt="Featured fashion story"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-12 md:px-14">
            <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
              Fashion · September 06, 2026
            </p>

            <h2 className="mt-5 text-[30px] font-light leading-tight md:text-[38px]">
              The New Rules of
              <br />
              <span className="font-medium">Modern Dressing</span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[12px] leading-6 text-gray-500">
              Fashion continues to evolve, but great style remains timeless.
              Discover how simplicity, confidence and thoughtful choices can
              transform your everyday wardrobe.
            </p>

            <button className="mt-7 flex w-fit items-center gap-3 border-b border-black pb-2 text-[10px] font-medium uppercase tracking-[1px]">
              Read Article
              <ArrowRight size={13} />
            </button>
          </div>
        </article>
      </section>

      {/* ================= BLOG GRID ================= */}

      <section className="mx-auto max-w-[1200px] px-5 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Explore
            </p>

            <h2 className="mt-3 text-[28px] font-medium">Latest Articles</h2>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[1px] text-gray-400 sm:block">
            06 Articles
          </span>
        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              {/* Image */}

              <div className="h-[280px] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="pt-5">
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[1px] text-gray-400">
                  <span>{post.category}</span>

                  <span className="h-[2px] w-[2px] rounded-full bg-gray-400" />

                  <span>{post.date}</span>
                </div>

                <h3 className="mt-3 text-[18px] font-medium leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-gray-500">
                  {post.description}
                </p>

                <button className="mt-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[1px]">
                  Read More
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-[700px] px-5 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
            Stay Inspired
          </p>

          <h2 className="mt-3 text-[30px] font-medium">
            Get The Latest Stories
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-[11px] leading-5 text-gray-500">
            Subscribe to our journal and receive the latest fashion stories,
            style guides and inspiration.
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
        </div>
      </section>
    </main>
  );
};

export default Blog;
