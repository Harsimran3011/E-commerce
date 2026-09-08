import { ArrowRight, Leaf, Sparkles, Gem } from "lucide-react";
import { useNavigate } from "react-router";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= HERO ================= */}

      <section className="relative">
        <div className="mx-auto grid max-w-[1200px] md:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}

          <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28">
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              The Story Behind Flone
            </p>

            <h1 className="mt-6 text-[46px] font-light leading-[1.05] tracking-[-2px] md:text-[68px]">
              Made for
              <br />
              <span className="font-medium">everyday life.</span>
            </h1>

            <p className="mt-7 max-w-[390px] text-[12px] leading-6 text-gray-500">
              Flone is a contemporary fashion label built around simplicity,
              confidence and pieces that stay relevant beyond a single season.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[1.5px]">
              Discover Our Story
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative h-[550px] md:h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
              alt="Flone fashion collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-7 left-7 bg-white px-6 py-5">
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Established
              </p>

              <p className="mt-1 text-[18px] font-medium">2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="mx-auto max-w-[900px] px-6 py-24 text-center md:py-32">
        <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
          Our Perspective
        </p>

        <h2 className="mt-6 text-[32px] font-light leading-tight md:text-[48px]">
          Fashion should feel
          <br />
          <span className="font-medium">effortless.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[650px] text-[12px] leading-7 text-gray-500">
          We started Flone with one simple belief: getting dressed shouldn't
          feel complicated. Our collections combine clean design, comfortable
          materials and subtle details to create pieces that naturally fit into
          your life.
        </p>
      </section>

      {/* ================= IMAGE STORY ================= */}

      <section className="mx-auto max-w-[1200px] px-5">
        <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
          {/* Large Image */}

          <div className="h-[520px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion styling"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Small Image + Text */}

          <div className="flex flex-col gap-5">
            <div className="h-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85"
                alt="Clothing collection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="bg-[#f4f2ed] p-7">
              <p className="text-[9px] uppercase tracking-[3px] text-gray-400">
                Our Approach
              </p>

              <p className="mt-4 text-[13px] leading-6 text-gray-600">
                Less decoration. Better materials. More attention to the details
                that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="mx-auto max-w-[1200px] px-5 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              What Matters
            </p>

            <h2 className="mt-5 text-[36px] font-light leading-tight md:text-[46px]">
              Our
              <br />
              <span className="font-medium">values.</span>
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {/* Value 01 */}

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <Gem size={20} strokeWidth={1.3} />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[2px] text-gray-400">
                01
              </p>

              <h3 className="mt-2 text-[16px] font-medium">Quality</h3>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                We choose materials and construction with longevity in mind.
              </p>
            </div>

            {/* Value 02 */}

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <Sparkles size={20} strokeWidth={1.3} />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[2px] text-gray-400">
                02
              </p>

              <h3 className="mt-2 text-[16px] font-medium">Simplicity</h3>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                Clean silhouettes designed to remain timeless season after
                season.
              </p>
            </div>

            {/* Value 03 */}

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <Leaf size={20} strokeWidth={1.3} />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[2px] text-gray-400">
                03
              </p>

              <h3 className="mt-2 text-[16px] font-medium">Consciousness</h3>

              <p className="mt-3 text-[11px] leading-5 text-gray-500">
                We continuously look for more thoughtful ways to create and
                consume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH IMAGE ================= */}

      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=1800&q=85"
          alt="Flone lifestyle"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-[700px] text-white">
            <p className="text-[10px] uppercase tracking-[4px] text-white/70">
              The Flone Philosophy
            </p>

            <h2 className="mt-6 text-[34px] font-light leading-tight md:text-[52px]">
              "The best wardrobe is the one
              <br className="hidden md:block" />
              that feels like you."
            </h2>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section className="mx-auto max-w-[1200px] px-5 py-24 md:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Where We're Going
            </p>

            <h2 className="mt-5 text-[36px] font-light leading-tight md:text-[48px]">
              Building a brand
              <br />
              <span className="font-medium">with purpose.</span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[12px] leading-6 text-gray-500">
              Flone is more than clothing. It's a way of thinking about fashion
              — choosing pieces with intention, expressing yourself with
              confidence and finding beauty in simplicity.
            </p>

            <p className="mt-4 max-w-[450px] text-[12px] leading-6 text-gray-500">
              As we grow, our focus remains the same: create products that
              people genuinely want to wear, keep and love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85"
                alt="Fashion detail"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85"
                alt="Fashion lifestyle"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[800px] px-6 py-24 text-center">
          <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
            Discover Flone
          </p>

          <h2 className="mt-5 text-[34px] font-light md:text-[46px]">
            Find something
            <br />
            <span className="font-medium">made for you.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[430px] text-[11px] leading-5 text-gray-500">
            Explore our latest collection of timeless essentials and everyday
            pieces.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center gap-3 bg-black px-8 py-4 text-[10px] font-medium tracking-[1.5px] text-white transition hover:bg-gray-800"
            onClick={() => navigate("/collection")}
          >
            EXPLORE COLLECTION
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
