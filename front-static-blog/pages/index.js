import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  let [initialState, setInitialState] = useState([]);
  // console.log("initialState >> " + initialState);

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
        setInitialState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllArticles();
    // console.log(initialState);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-2 sm:mx-10 xl:mx-24">
        <div className="flex flex-wrap -mx-2">
          {/* START ARTICLE */}
          {initialState.map((article) => {
            return (
              <div
                className="sm:w-full mt-8 md:w-1/2 xl:w-1/3 xl:mt-16 px-10"
                key={article.title}
              >
                <article className="rounded shadow-lg overflow-hidden">
                  <img
                    className="w-full"
                    src={`http://localhost:1337${article.image.url}`}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 pt-4">
                    <div className="font-bold text-xl mb-2">
                      {article.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {article.content.length > 128
                        ? `${article.content.slice(0, 250)}...`
                        : article.content}
                    </p>
                    <div className="text-gray-500 text-sm mt-2">
                      {article.author.nickname}
                    </div>
                  </div>
                  <div className="px-6 pt-4 mb-5">
                    <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
                      #{article.category.name}
                    </span>
                  </div>
                </article>
              </div>
            );
          })}
          {/* END ARTICLE */}
        </div>
      </div>
    </div>
  );
};

export default Home;
