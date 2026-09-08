import { ArrowRight, Eye } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const { registerForm, handleSubmit, errors, register } = useAuth();

  return (
    <main className="min-h-screen bg-[#f7f6f2]">
      {/* ================= REGISTER SECTION ================= */}

      <section className="flex min-h-[calc(100vh-74px)] items-center justify-center px-5 py-14">
        <div className="w-full max-w-[470px]">
          {/* ================= HEADING ================= */}

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Join Flone
            </p>

            <h1 className="mt-4 text-[38px] font-light tracking-[-1.5px]">
              Create your
              <span className="font-medium"> account.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[340px] text-[11px] leading-5 text-gray-500">
              Create an account to save your favourites, manage orders and enjoy
              a better shopping experience.
            </p>
          </div>

          {/* ================= REGISTER CARD ================= */}

          <div className="mt-9 bg-white px-7 py-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:px-10">
            <form onSubmit={handleSubmit(registerForm)} className="space-y-5">
              {/* ================= FIRST + LAST NAME ================= */}

              <div className="grid gap-4 sm:grid-cols-2">
                {/* First Name */}

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`h-12 w-full border px-4 text-[12px] outline-none transition focus:border-black ${
                      errors.firstName ? "border-red-400" : "border-gray-200"
                    }`}
                  />

                  {errors.firstName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`h-12 w-full border px-4 text-[12px] outline-none transition focus:border-black ${
                      errors.lastName ? "border-red-400" : "border-gray-200"
                    }`}
                  />

                  {errors.lastName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* ================= EMAIL ================= */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`h-12 w-full border px-4 text-[12px] outline-none transition focus:border-black ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* ================= PASSWORD ================= */}

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type="text"
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className={`h-12 w-full border px-4 pr-12 text-[12px] outline-none transition focus:border-black ${
                      errors.password ? "border-red-400" : "border-gray-200"
                    }`}
                  />

                  <button
                    type="button"
                    aria-label="Show password"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  >
                    <Eye size={17} strokeWidth={1.5} />
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* ================= CONFIRM PASSWORD ================= */}

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type="text"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                    })}
                    className={`h-12 w-full border px-4 pr-12 text-[12px] outline-none transition focus:border-black ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  <button
                    type="button"
                    aria-label="Show password"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  >
                    <Eye size={17} strokeWidth={1.5} />
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* ================= TERMS ================= */}

              <div>
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("terms", {
                      required: "You must accept the terms",
                    })}
                    className="mt-0.5 h-3.5 w-3.5 accent-black"
                  />

                  <label
                    htmlFor="terms"
                    className="text-[10px] leading-5 text-gray-500"
                  >
                    I agree to the{" "}
                    <span className="text-black underline">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-black underline">Privacy Policy</span>
                    .
                  </label>
                </div>

                {errors.terms && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* ================= REGISTER BUTTON ================= */}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-3 bg-black text-[10px] font-medium tracking-[1.5px] text-white transition hover:bg-gray-800"
              >
                CREATE ACCOUNT
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-100" />

              <span className="text-[9px] uppercase tracking-[2px] text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-100" />
            </div>

            {/* ================= LOGIN ================= */}

            <div className="text-center">
              <p className="text-[11px] text-gray-500">
                Already have an account?
              </p>

              <NavLink
                to="/auth/login"
                className="mt-2 inline-block border-b border-black pb-1 text-[10px] font-medium uppercase tracking-[1.5px] text-black"
              >
                Sign In
              </NavLink>
            </div>
          </div>

          {/* ================= BOTTOM TEXT ================= */}

          <p className="mt-7 text-center text-[9px] leading-5 text-gray-400">
            Your information is securely protected and will only be used to
            provide you with our services.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
