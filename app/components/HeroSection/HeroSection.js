import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-6xl">
            Empower <br />
            <strong className="font-extrabold text-blue-800 sm:block">Communication.</strong>
          </h1>

          <p className="mt-6 text-lg text-gray-700 sm:text-xl">
            <u>Unify</u> bridges the gap for the Deaf and Dumb community, providing accessible resources and a supportive environment to enhance learning and connection!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
  className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto"
  href="/sign-in?redirectUrl=/dashboard"
>
  Get Started
</a>


            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-800 border border-blue-800 shadow hover:bg-blue-800 hover:text-white transition duration-300 focus:outline-none focus:ring active:bg-blue-700 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
