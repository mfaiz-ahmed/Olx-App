import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Services from "../Components/Services";
import Products from "../Components/Products";
import SalePart from "../Components/SalePart";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import CartPopup from "../Components/CartPopup";

export default function HomePage() {
  const color = useSelector((state) => state.themeStore.color);
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <Navbar />
      <Carousel />
      <Services />
      <CartPopup/>
      <Products />
      <SalePart />
      <Blog />
      <Footer />
    </div>
  );
}
