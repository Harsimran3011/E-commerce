import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";
import Footer from "../../shared/ui/components/Footer";
import ScrollToTop from "../../shared/ui/components/ScrollToTop";

const MainLayout = () => (
  <div>
    <Navbar />
    <ScrollToTop />
    <main className="pt-15">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
