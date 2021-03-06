import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";

const About = () => {
  const [author, setAuthor] = useState();

  const getAuthorById = () => {
    axios({
      method: "get",
      url: "http://localhost:1337/authors/4",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAuthorById();
  }, author);

  // console.log(author.nickname);

  return (
    <>
      <Navbar />
        <article className="mx-auto sm:w-full px-10 md:px-0 md:w-3/4 xl:w-2/4 mb-10 m-8">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={`http://localhost:1337${author ? author.avatar.url : null}`}
              alt="alt a changer"
              className="w-1/4 rounded shadow-lg"
            />
            <h1 className="font-bold text-gray-700 text-3xl md:text-5xl text-center w-3/4 mt-6 md:mt-0">
              Hi, i'm {author ? author.nickname : null}
            </h1>
          </div>
          <div className="py-6 mt-6 text-gray-700 border-t-2">
            <p>
              I'm a <strong>front-end developper</strong> based in Toulon
              (France) and this is an example project.
            </p>
            <p className="pt-3">
              For this fakeblog, i'm using <strong>Strapi</strong> to create a
              database and generate data that i consume with{"  "}
              <strong>NextJS</strong>.
            </p>
            <p className="pt-3">
              I'm open to work on total remote, or as a freelance. Feel free
              to contact me :
              <a href="mailto:edm.fred@gmail.com" className="text-green-300 hover:text-white hover:bg-green-300 px-2 py-2 ml-1 rounded duration-300">
                edm.fred@gmail.com
              </a>
            </p>
            <p className="pt-3">
              U can check my GitHub here :
              <a href="https://github.com/Fred-ihu" className="text-green-300 hover:text-white hover:bg-green-300 px-2 py-2 ml-1 rounded duration-300">
                https://github.com/Fred-ihu
              </a>
            </p>
            <p className="pt-3">
              And my LinkedIn profile :
              <a
                href="https://linkedin.com/in/fred-ihuel"
                className="text-green-300 hover:text-white hover:bg-green-300 px-2 py-2 ml-1 rounded duration-300"
              >
                https://linkedin.com/in/fred-ihuel
              </a>
            </p>
          </div>
        </article>
    </>
  );
};

export default About;
