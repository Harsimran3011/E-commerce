import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";

import { NavLink } from "react-router";
import { useAuth } from "../../../features/auth/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { removeLoggedInUser } = useAuth();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-100 bg-white fixed w-full z-99">
      <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between px-5">
        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          onClick={() => {
            handleMenuClose();
            removeLoggedInUser();
          }}
          className="text-[28px] font-bold tracking-[-1.5px]"
        >
          Flone.
        </NavLink>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-500 hover:text-black"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-4 text-gray-700">
          {/* Search */}

          <button
            type="button"
            className="transition-colors hover:text-black"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>

          {/* User */}

          <button
            type="button"
            className="hidden transition-colors hover:text-black sm:block"
            aria-label="Account"
          >
            <UserRound size={18} strokeWidth={1.5} />
          </button>

          {/* Wishlist */}

          <button
            type="button"
            className="hidden transition-colors hover:text-black sm:block"
            aria-label="Wishlist"
          >
            <Heart size={18} strokeWidth={1.5} />
          </button>

          {/* Shopping Bag */}

          <button
            type="button"
            className="relative transition-colors hover:text-black"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />

            <span className="absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] text-white">
              02
            </span>
          </button>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={handleMenuToggle}
            className="lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1200px] px-5 py-5">
          <div className="flex flex-col">
            <NavLink
              to="/"
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `border-b border-gray-100 py-4 text-[13px] ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/collection"
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `border-b border-gray-100 py-4 text-[13px] ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`
              }
            >
              Collection
            </NavLink>

            <NavLink
              to="/blog"
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `border-b border-gray-100 py-4 text-[13px] ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `border-b border-gray-100 py-4 text-[13px] ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `py-4 text-[13px] ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
