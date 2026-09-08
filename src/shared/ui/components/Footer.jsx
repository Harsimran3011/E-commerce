import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-[26px] font-bold">Flone.</h2>

          <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-gray-400">
            Timeless fashion and everyday essentials designed with purpose.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-medium tracking-[2px]">
            EXPLORE
          </h3>

          <ul className="space-y-3 text-[10px] text-gray-400 flex flex-col">
            <NavLink to={"/collection"}>Collection</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-medium tracking-[2px]">
            SUPPORT
          </h3>
    
          <ul className="space-y-3 text-[10px] text-gray-400">
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-medium tracking-[2px]">
            FOLLOW US
          </h3>

          <ul className="space-y-3 text-[10px] text-gray-400">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
