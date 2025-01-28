import BestSell from "./sections/BestSell";
import BestSelling from "./sections/BestSelling";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LatestArticles from "./sections/LatestArticles";
import OurCollection from "./sections/OurCollections";
import OurValues from "./sections/OurValues";
import Welcome from "./sections/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <OurValues />
      <BestSelling />
      <OurCollection />
      <BestSell />
      <LatestArticles />
      <Footer />
    </>
  );
}
