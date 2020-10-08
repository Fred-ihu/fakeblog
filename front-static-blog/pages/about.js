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
      <article className="mx-auto sm:w-full md:w-3/4 xl:w-2/4 mb-10 my-8">
      <div className="flex flex-row items-center">
        <img
            src={`http://localhost:1337${author ? author.avatar.url : null}`}
            alt="alt a changer"
            className="w-1/4"
          />
          <h1 className="font-bold text-gray-700 text-5xl text-center w-3/4">Hi, i'm {author ? author.nickname : null}</h1>
      </div>
        <p className="py-6 mt-6 text-gray-700 border-t-2">{author ? author.description : null}</p>
      </article>
    </>
  );
};

export default About;
