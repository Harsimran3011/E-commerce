import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";
import Footer from "../../shared/ui/components/Footer";
import ScrollToTop from "../../shared/ui/components/ScrollToTop";

const MainLayout = () => (
  <div>
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </div>
);

export default MainLayout;
