import ProductCard from "../components/ProductCard";
import ProductsSlider from "../components/ProductsSlider";

export default function BestSelling() {
  return (
    <section className="section-container">
      <h2 className="section-header text-center mt-6 sm:mt-10 mb-16 text-[#AB572D]">
        Best selling products
      </h2>
      <ProductsSlider />
    </section>
  );
}
