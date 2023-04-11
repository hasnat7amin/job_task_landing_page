import React from "react";

function Contact() {
  return (
    <div className="py-10 bg-white">
      <div>
        <h2 className="text-3xl font-bold text-center text-purple md:text-5xl">
          Contact Us
        </h2>
      </div>
      <div className="flex items-center justify-center w-full px-8 py-5 m-auto text-center md:w-2/6">
        <p className="text-center text-black">
          If you have any issue in process or you want to give us any suggestion
          you can contact us .
        </p>
      </div>
      <div className="p-4 mt-4">
        <form className="flex flex-col items-center justify-center">
          <div class="mb-4 md:w-2/6 w-full">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="you@company.com"
            />
          </div>
          <div class="mb-4 md:mb-4 md:w-2/6 w-full">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
            />
          </div>
          <div class="mb-4 md:mb-4 md:w-2/6 w-full">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div class="mb-4 md:mb-4 md:w-2/6 w-full flex items-center ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              You agree to our friendly <span className="underline text-purple">privacy policy.</span>
            </label>
          </div>
          <button
            className="w-full py-2 mt-1 mb-2 text-sm font-bold text-center text-white rounded-md md:w-2/6 md:text-1xl px-11 bg-purple h-min"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
