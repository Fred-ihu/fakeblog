import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Moment from "react-moment";

import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Loading/Loading";

const Home = ({ allArticles }) => {
  const [searchContent, setSearchContent] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredArticles = allArticles.filter(
    (results) =>
      results.title.toLowerCase().includes(searchContent) ||
      results.category.name.includes(searchContent)
  );

  const articlesToDisplay = searchContent ? filteredArticles : allArticles;

  return (
    <>
      <Head>
        <link rel="shortcun icon" href="/favicon.svg" />
        <title>Fakeblog - a fake blog</title>
        <meta
          name="Description"
          content="This is a fake blog to show strapi and nextjs combo"
        ></meta>
      </Head>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="px-2 sm:mx-10 xl:mx-24 flex flex-col">
          <div className="relative px-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-8 text-gray-700">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 mt-5"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <label for="searchArticle" className="invisible">
              search for an article
              <input
              id="searchArticle"
                type="search"
                className="py-2 text-sm visible rounded-md pl-10 outline-none focus:border-green-300 border-2 border-gray-300 w-full placeholder-gray-700"
                placeholder="Search..."
                name="searchArticle"
                value={searchContent}
                onChange={(evt) => {
                  setSearchContent(evt.target.value.toLowerCase());
                }}
              />
            </label>
          </div>

          <div className="flex flex-wrap -mx-2  mb-24">
            {/* START ARTICLE */}
            {articlesToDisplay.map((article) => {
              return (
                <div
                  className="sm:w-full mt-6 md:w-1/2 xl:w-1/3 px-8 text-gray-700"
                  key={article.title}
                >
                  <Link href="/article/[slug]" as={`article/${article.slug}`}>
                    <article className="rounded shadow-lg overflow-hidden hover:scale-50 cursor-pointer transform hover:scale-105 duration-300 min-h-full">
                      <img
                        className="w-full h"
                        src={article.image.formats.small.url}
                        alt={article.title}
                      />
                      <div className="px-6 pt-4">
                        <h2 className="font-bold text-xl mb-2">
                          {article.title}
                        </h2>
                        <p className="text-gray-700 text-base">
                          {article.content.length > 128
                            ? `${article.content.slice(0, 280)}...`
                            : article.content}
                        </p>
                        <div className="text-gray-700 text-sm mt-2">
                          {article.author.nickname} -{" "}
                          <Moment format="MMM d, YYYY">
                            {article.created_at}
                          </Moment>
                        </div>
                      </div>
                      <div className="px-6 pt-4 mb-5">
                        <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-3">
                          #{article.category.name}
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
            {/* END ARTICLE */}
          </div>
        </div>
      )}
    </>
  );
};

// getStaticProps
export const getStaticProps = async () => {
  const response = await axios({
    method: "get",
    url: "https://fred-ihu-strapi-fakeblog.herokuapp.com/articles",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const allArticles = await response.data;
  return {
    props: {
      allArticles,
    },
  };
};

export default Home;
