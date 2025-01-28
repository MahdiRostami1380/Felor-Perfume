export default function OurValues() {
  return (
    <section className="relative flex lg:flex-row justify-end items-start xl-items-center h-[710px] sm:h-[600px] xl:h-[575px] gap-10 bg-RadialGradientOurValues">
      <div className="absolute top-[410px] sm:top-[320px] xl:top-0 left-0 h-[300px] xl:h-full w-full xl:w-[600px] 2xl:w-[700px] bg-cover bg-[url('/Images/our-values.jpg')] bg-center">
        <div className="w-full h-full bg-black/30"></div>
      </div>
      <div className="section-container flex justify-end">
        <div className="flex flex-col w-full xl:w-1/2">
          <h2 className="section-header text-center mb-7">Our Values</h2>
          <p className="indent-10 mb-5 text-[14px] md:text-base">
            At Felor, our perfume retail store is built on a foundation of
            passion and authenticity. We believe in celebrating the
            individuality of every customer, providing a diverse collection of
            scents that resonate with their unique personality and style. Our
            dedicated team of fragrance enthusiasts is committed to creating a
            welcoming and inclusive environment, where connections are forged,
            and inspiration thrives.
          </p>
          <p className="indent-10 text-[14px] md:text-base">
            Embracing sustainability and continuous learning, Felor strives to
            be more than just a shopping destination; we are a community that
            inspires and empowers individuals on their fragrances journey.
          </p>
        </div>
      </div>
    </section>
  );
}
