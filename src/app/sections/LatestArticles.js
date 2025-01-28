import ArticlesSlider from "../components/ArticlesSlider";

export default function LatestArticles() {
  return (
    <section className="section-container">
      <h2 className="section-header text-[#AB572D] text-center my-10">
        Latest Articles
      </h2>
      <div className="my-20">
        <ArticlesSlider />
      </div>
    </section>
  );
}
