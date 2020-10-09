import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  let [allArticles, setAllArticles] = useState([]);
  let [searchContent, setSearchContent] = useState("");


  const getAllArticles = () => {
    axios({
      method: "get",
      url: "http://localhost:1337/articles",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        setAllArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  const filteredArticles = allArticles.filter(
    (results) =>
      results.title.toLowerCase().includes(searchContent) ||
      results.category.name.toLowerCase().includes(searchContent)
  );

  const articlesToDisplay = searchContent ? filteredArticles : allArticles;

  return (
    <>
      <Navbar />
      <div className="px-2 sm:mx-10 xl:mx-24 flex flex-col">
        <input
          type="search"
          placeholder="Search for an article"
          className="rounded mx-8 mt-10 py-2 px-3 border-b-2 focus:border-green-300 duration-300 outline-none placeholder-color-gray-500 text-gray-700 text-center"
          name="searchArticle"
          value={searchContent}
          onChange={(evt) => {
            setSearchContent(evt.target.value);
          }}
        />

        <div className="flex flex-wrap -mx-2  mb-24">
          {/* START ARTICLE */}
          {articlesToDisplay.map((article) => {
            return (
              <div
                className="sm:w-full mt-12 md:w-1/2 xl:w-1/3 px-8 text-gray-700"
                key={article.title}
              >
                <Link href="/article/[slug]" as={`article/${article.slug}`}>
                  <article className="rounded shadow-lg overflow-hidden hover:scale-50 cursor-pointer transform hover:scale-105 duration-300 min-h-full">
                    <img
                      className="w-full h"
                      src={`http://localhost:1337${article.image.url}`}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 pt-4">
                      <h2 className="font-bold text-xl mb-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-700 text-base">
                        {article.content.length > 128
                          ? `${article.content.slice(0, 200)}...`
                          : article.content}
                      </p>
                      <div className="text-gray-500 text-sm mt-2">
                        {article.author.nickname}
                      </div>
                    </div>
                    <div className="px-6 pt-4 mb-5">
                      <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
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
    </>
  );
};

export default Home;
