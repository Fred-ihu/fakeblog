import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar/Navbar";

import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="lg:flex justify-evenly"> */}
      <div className="px-2 sm:mx-10 xl:mx-24">
        <div className="flex flex-wrap -mx-2">
          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10 hover:scale-110">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>

          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>

          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>

          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>

          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>

          <div className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10">
            <article className="rounded shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Content -- Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="text-gray-500 text-sm mt-2">author name</div>
              </div>
              <div className="px-6 pt-4 mb-5">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag2
                </span>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                  #tag3
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
