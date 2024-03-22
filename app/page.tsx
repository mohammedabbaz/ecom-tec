import Image from "next/image";
import HeaderBanner from "./components/HeaderBanner";
import MostProduct from "./components/MostProduct";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";

export default function Home() {
  return (
    <div className="container my-16">
      <HeaderBanner />

      <MostProduct />
    
      <FooterBanner />
      <Footer />
    </div>
  );
}
