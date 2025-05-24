import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-4 text-gray-300">
      <div className="max-w-6xl mx-auto grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-3 text-center md:text-left">
        <div className="">
          <h2 className="font-bold text-2xl my-6">Construction</h2>
          <p className="text-base">
            You&#39;ll find your next Home loan value you prefer. in Resources Our
            Agents Member.
          </p>
          <div className="flex flex-row flex-wrap gap-4 my-5 md:justify-start justify-center">
            <span>Icon</span>
            <span>Icon</span>
            <span>Icon</span>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl my-6">Resources</h2>
          <ul>
            <li>Our agents</li>
            <li>Member Stories</li>
            <li>Video</li>
            <li>Free Trail</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl my-6">Company</h2>
          <ul>
            <li>Partnerships</li>
            <li>Term of use </li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl my-6">Get In Touch</h2>
          <input
            type="text"
            placeholder="Enter Your mail"
            name=""
            id=""
            className="border-1 border-white p-2 rounded-md"
          />
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block my-3">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950  px-3 py-1 ring-1 ring-white/10 ">
              <span className="text-xl">Submit</span>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
      <p className="text-center mx-auto m-2 text-gray-300 my-5">
        @2025 Copyright Buildingo.com, All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
