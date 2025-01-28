export default function BestSell() {
  return (
    <section className="relative section-container h-[400px] md:h-[538px] bg-[url('/Images/best-sell.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="flex items-center justify-center md:justify-start w-full h-full absolute top-0 left-0 bg-RadialGradientBestSell">
        <div className="flex flex-col items-center md:items-start ml-5 max-w-[520px]">
          <h2 className="section-header leading-[30px] md:leading-[50px] lg:leading-[70px] mb-6 text-center md:text-left">
            Perfume Year-End Sale! Up to 50% OFF
          </h2>
          <p className="font-thin max-w-[400px] mb-16 text-[14px] md:text-base text-center md:text-left">
            Discover an exquisite collection of premium perfumes at unbelievable
            prices during our exclusive Perfume Sale!
          </p>
          <button className="btn btn-primary">Know more</button>
        </div>
      </div>
    </section>
  );
}
