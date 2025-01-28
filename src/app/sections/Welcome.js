export default function Welcome() {
  return (
    <section className="md:h-[400px] lg:h-[564px] bg-[url('/Images/welcome.jpg')] bg-cover bg-center relative flex justify-center items-center flex-col gap-5 md:gap-10 px-3 py-8">
      <h2 className="section-header text-[#AB572D] z-10">Welcome to Felor</h2>
      <p className="font-light max-w-[600px] z-10 text-center leading-5 text-[14px] md:text-base">
        Welcome to Felor Perfumes, where the spirit of victory and triumph come
        alive through scents that empower and inspire. Our curated collection,
        aptly named "Victory Scented," is a celebration of success and elegance,
        designed to unleash your victorious essence. Indulge in the sweet taste
        of triumph with captivating fragrances that tell the tale of your
        achievements. At Felor, we believe that every victory deserves a
        signature scent, and we are dedicated to providing unforgettable
        fragrances that elevate your spirit and empower your journey.
      </p>
      <div className="absolute w-full h-full bg-black/80 top-0 left-0 z-0"></div>
    </section>
  );
}
