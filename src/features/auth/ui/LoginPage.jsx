import { Eye, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { loginForm, handleSubmit, errors, register } = useAuth();

  return (
    <main className="min-h-screen bg-[#f7f6f2]">
      {/* ================= LOGIN SECTION ================= */}

      <section className="flex min-h-[calc(100vh-74px)] items-center justify-center px-5 py-16">
        <div className="w-full max-w-[430px]">
          {/* Heading */}

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Welcome Back
            </p>

            <h1 className="mt-4 text-[38px] font-light tracking-[-1.5px]">
              Sign in to
              <span className="font-medium"> Flone.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[320px] text-[11px] leading-5 text-gray-500">
              Enter your details below to access your account and continue
              shopping.
            </p>
          </div>

          {/* Login Card */}

          <div className="mt-10 bg-white px-7 py-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:px-10">
            <form onSubmit={handleSubmit(loginForm)} className="space-y-6">
              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="username"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                    // pattern: {
                    //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    //   message: "Enter a valid username address",
                    // },
                  })}
                  className={`h-12 w-full border px-4 text-[12px] outline-none transition focus:border-black ${
                    errors.username ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.username && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500"
                  >
                    Password
                  </label>

                  <NavLink
                    to="/forgot-password"
                    className="text-[10px] text-gray-400 transition hover:text-black"
                  >
                    Forgot Password?
                  </NavLink>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type="text"
                    placeholder="Enter your password"
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

              {/* Remember Me */}

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-black"
                />

                <label htmlFor="remember" className="text-[10px] text-gray-500">
                  Remember me
                </label>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-3 bg-black text-[10px] font-medium tracking-[1.5px] text-white transition hover:bg-gray-800"
              >
                SIGN IN
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>

            {/* Divider */}

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-100" />

              <span className="text-[9px] uppercase tracking-[2px] text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-100" />
            </div>

            {/* Register */}

            <div className="text-center">
              <p className="text-[11px] text-gray-500">
                Don't have an account?
              </p>

              <NavLink
                to="/auth/register"
                className="mt-2 inline-block border-b border-black pb-1 text-[10px] font-medium uppercase tracking-[1.5px] text-black"
              >
                Create Account
              </NavLink>
            </div>
          </div>

          {/* Bottom Text */}

          <p className="mt-8 text-center text-[9px] leading-5 text-gray-400">
            By signing in, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
