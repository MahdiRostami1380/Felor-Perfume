export default function Hero() {
  return (
    <section className="section-container bg-RadialGradient">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-center lg:items-start lg:mt-40">
          <div className="max-w-[400px] md:max-w-[650px] lg:max-w-[700px]">
            <h1 className="text-xl md:text-4xl lg:text-5xl text-center lg:text-left mb-4 md:leading-[60px]">
              Elevate Your Spirit with Victory Scented Fragrances!
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl font-light text-center lg:text-left mb-14 lg:max-w-[530px]">
              Shop now and embrace the sweet smello of victory with Felor
            </p>
          </div>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="flex justify-center">
          <img
            src="./Images/hero.svg"
            alt="Hero image"
            className="md:h-[550px] lg:h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}
