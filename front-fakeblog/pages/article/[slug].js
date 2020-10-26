import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Moment from "react-moment";

import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";

const Article = ({ articleTest }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <link rel="shortcun icon" href="/favicon.svg" />
        <title>{articleTest.title || ""}</title>
      </Head>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <article className="px-10 md:px-0">
          <div className="md:pl-5 mt-5 text-gray-700 text-sm md:text-base">
            <Link href="/">
              <span className="cursor-pointer hover:text-green-300 duration-300">Home</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline w-5 pb-1 mx-2 text-green-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            {articleTest.title}
          </div>
          <img
            src={articleTest ? articleTest.image.url || "" : null || ""}
            alt="alt a changer"
            className="mt-5 mx-auto md:w-3/4 lg:w-3/4 xl:w-2/4 shadow-md"
          />
          <section className="mx-auto sm:w-full md:w-3/4 xl:w-2/4 mb-10">
            <div className="md:flex md:flex-row pt-8 justify-between items-baseline">
              <h1 className="font-bold text-gray-700 text-3xl">
                {articleTest.title}
              </h1>
              <h2 className="text-gray-600 text-md">
                By {articleTest.author.nickname} -{" "}
                <Moment format="MMM d, YYYY">{articleTest.created_at}</Moment>
              </h2>
            </div>
            <div className="inline-block bg-gray-200 px-4 py-1 mt-2 rounded-lg text-sm font-semibold text-gray-700">
              #{articleTest.category.name}
            </div>
            <p className="py-6 mt-6 text-gray-700 border-t-2">
              {articleTest.content}
            </p>
          </section>
        </article>
      )}
    </>
  );
};

// getStaticPaths
export const getStaticPaths = async () => {
  const response = await axios({
    method: "get",
    url: `https://fred-ihu-strapi-fakeblog.herokuapp.com/articles`,
  });
  const articleBySlug = await response.data;
  const paths = articleBySlug.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
};

// getStaticProps
export const getStaticProps = async ({ params }) => {
  const response = await axios({
    method: "get",
    url: `https://fred-ihu-strapi-fakeblog.herokuapp.com/articles?slug=${params.slug}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const articleTest = await response.data[0];
  return {
    props: {
      articleTest,
    },
  };
};

export default Article;
