import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug);

  const [article, setArticle] = useState([]);

  const getArticleBySlug = () => {
    axios({
      method: "get",
      url: `http://localhost:1337/articles?slug=${slug}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        setArticle(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getArticleBySlug();
  }, []);

  console.log("ARTICLE HOOK CONTENT", article);

  return (
    <div>
      <Navbar />
      <div>{article ? article.title : null}</div>
    </div>
  );
};

export default Article;
