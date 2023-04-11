import React from "react";

function Project() {
  return (
    <div className="bg-slate-100">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center text-purple md:text-5xl">
            Do you want to know?
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-10 pb-20 md:flex-row">
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="relative items-center bg-no-repeat bg-cover rounded-xl w-80 h-80 md:w-96 bg-know-image md:h-96">
              <h3 className="absolute left-0 right-0 w-auto px-4 text-xl font-bold text-center text-white bottom-7">
                What is Wassiyah?
              </h3>
            </div>
            <div className="px-8 py-5 md:w-96 w-80">
              <p className="text-black ">
                We aim to revive the sunna of wassiyah and provide a FREE
                accessible platform that will incentivize YOU to write YOUR will
                in all PRIVACY.{" "}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="relative items-center bg-no-repeat bg-cover rounded-xl w-80 h-80 md:w-96 bg-know-image md:h-96">
              <h3 className="absolute left-0 right-0 w-auto px-4 text-xl font-bold text-center text-white bottom-7">
                What is Wassiyah?
              </h3>
            </div>
            <div className="px-8 py-5 md:w-96 w-80">
              <p className="text-black ">
                We aim to revive the sunna of wassiyah and provide a FREE
                accessible platform that will incentivize YOU to write YOUR will
                in all PRIVACY.{" "}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="relative items-center bg-no-repeat bg-cover rounded-xl w-80 h-80 md:w-96 bg-know-image md:h-96">
              <h3 className="absolute left-0 right-0 w-auto px-4 text-xl font-bold text-center text-white bottom-7">
                What is Wassiyah?
              </h3>
            </div>
            <div className="px-8 py-5 md:w-96 w-80">
              <p className="text-black ">
                We aim to revive the sunna of wassiyah and provide a FREE
                accessible platform that will incentivize YOU to write YOUR will
                in all PRIVACY.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="mt-10 mb-5 text-3xl font-bold text-center text-purple md:text-5xl">
            Let’s write your will!
          </h2>
        </div>
        <div className="flex items-center justify-center w-full px-8 py-5 m-auto text-center md:w-2/3">
          <p className="text-center text-black">
            We aim to revive the sunna of wassiyah and provide a FREE accessible
            platform that will incentivize YOU to write YOUR will in all
            PRIVACY.{" "}
          </p>
        </div>
        <button
          className="py-4 mt-10 mb-20 text-sm font-bold text-center text-white rounded-md md:text-1xl px-11 bg-purple h-min"
          type="submit"
        >
          Start your will Now
        </button>
      </div>
    </div>
  );
}

export default Project;
