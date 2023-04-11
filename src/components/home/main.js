import React from "react";

function Main() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center text-white bg-no-repeat bg-cover h-96 md:h-screen bg- bg-main-image">
        <div>
          <h2 className="px-3 text-3xl center text-font-semibold md:text-6xl md:p-0">
            “ After fulfilling any will<br></br>and paying of debts”
          </h2>
          <h5 className="px-3 font-semibold text-right text-md md:p-0 md:text-2xl">
            Surat An-Nisaa 4:12
          </h5>
        </div>
      </div>
      <div className="md:absolute -left-4 md:-bottom-36 ">
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-5/6 p-12 md:m-2 mt-10 bg-white md:w-2/5 h-min rounded-xl shadow-[12px_12px_70px_-15px_rgba(0,0,0,0.25)]">
                <h2 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl">Our Mission</h2>
                <p className="text-xs font-normal leading-6 text-justify">We aim to revive the sunna of wassiya and provide a FREE accessible platform that will incentivize YOU to write YOUR will in all PRIVACY. Through the platform, YOU will be able to write your will note, load documents and give a restricted access up to 4 will executors who will be able to implement your wishes and manage up to 1/3 of your assets (allowed by inheritance rulings) following your instructions.</p>
            </div>
            <div className="w-5/6 p-12 m-2 bg-white md:w-2/5 h-min rounded-xl shadow-[12px_12px_70px_-15px_rgba(0,0,0,0.25)]">
                <h2 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl">Who we Are?</h2>
                <p className="text-xs font-normal leading-6 text-justify">In the global world we live in and where many of us find ourselves ocean aparts from our family and loved ones, we took as a mission to develop a platform that will bring people closer and make it easier to revive the sunna of wassiya that is abandoned by so many today. We want to leverage on technology to ensure that everyone can easily do it, while ensuring full privacy of the wassiya content.</p>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Main;
