import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#222]">
      <section className="flex min-h-screen items-center justify-center px-5">
        <div className="flex max-w-[600px] flex-col items-center text-center">
          {/* 404 */}
          <p className="text-[120px] font-light leading-none tracking-[-6px] md:text-[180px]">
            404
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-[28px] font-light tracking-[-1px] md:text-[36px]">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[420px] text-[12px] leading-6 text-gray-500">
            The page you're looking for doesn't exist or may have been moved,
            removed, or temporarily unavailable.
          </p>

          {/* Back To Home */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-8 flex cursor-pointer h-12 items-center justify-center gap-3 bg-black px-8 text-[10px] font-medium tracking-[1.5px] text-white transition hover:bg-gray-800"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            BACK TO HOME
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
