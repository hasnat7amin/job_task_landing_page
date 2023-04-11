import React from "react";
import account from "../../images/account.png";
import setting from "../../images/setting.png";
import link from "../../images/link.png";
import page from "../../images/page.png";
import arrow_left from "../../images/arrow-left.png";
import arrow_down from "../../images/arrow-down.png";

function Work() {
  return (
    <div>
      <div className="h-24 md:h-44"></div>
      <div className="flex flex-col items-center justify-center py-10 bg-no-repeat bg-cover bg-work-image">
        <h2 className="text-3xl font-bold text-center text-white md:text-5xl">
          How Does It work?
        </h2>
        <div className="my-5">
          <div className="flex flex-col items-center md:flex-row">
            <div className="relative flex flex-col p-4 mb-4 bg-white rounded-md md:m-0 w-80">
              <h1 className="absolute text-xl font-bold text-purple">01</h1>
              <div className="flex flex-col items-center justify-center w-full">
                <img src={account} alt="setting" />
                <div className="h-10"></div>
                <p className="text-center">
                  Create your <b>account and verify</b> your identity
                </p>
              </div>
            </div>
            {/* image */}
            <div className="items-center hidden md:flex">
              <img className="" src={arrow_left} alt="arrow" />
            </div>
            <div className="relative flex flex-col p-4 mb-4 bg-white rounded-md md:m-0 w-80">
              <h1 className="absolute text-xl font-bold text-purple">02</h1>
              <div className="flex flex-col items-center justify-center w-full">
                <img src={page} alt="page" />
                <div className="h-10"></div>
                <p className="text-center">
                  After Login you can <b>create your own will</b> by clicking on
                  create your own will button
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <img src={arrow_down} alt="arrow" />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative flex flex-col p-4 mb-4 bg-white rounded-md md:m-0 w-80">
              <h1 className="absolute text-xl font-bold text-purple">03</h1>
              <div className="flex flex-col items-center justify-center w-full">
                <img src={setting} alt="setting" />
                <div className="h-10"></div>
                <p className="text-center">
                  Choose up to <b>4 will executors</b> and share the credentials
                  with sub-users. As life situation evolves, keep updating your
                  Will using our website or apps
                </p>
              </div>
            </div>
            {/* image */}
            <div className="items-center hidden md:flex">
              <img src={arrow_left} alt="arrow" />
            </div>
            <div className="relative flex flex-col p-4 mb-4 bg-white rounded-md md:m-0 w-80">
              <h1 className="absolute text-xl font-bold text-purple">04</h1>
              <div className="flex flex-col items-center justify-center w-full">
                <img src={link} alt="link" />
                <div className="h-10"></div>
                <p className="text-center">
                  If one tries to connect to your account, There will be three
                  options for you.
                </p>
                <ol className="mt-4 list-decimal list-inside marker:font-bold after:marker:pr-2">
                  <li>Approve Success</li>
                  <li>Deny Success</li>
                  <li>No Answer after 96hrs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <button
          className="py-4 text-sm font-bold text-center text-white rounded-md md:text-1xl px-11 bg-purple h-min"
          type="submit"
        >
          Start your will Now
        </button>
      </div>
    </div>
  );
}

export default Work;
