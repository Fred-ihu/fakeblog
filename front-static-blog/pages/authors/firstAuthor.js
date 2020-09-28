// import Head from 'next/head';
import Link from "next/link";

const firstAuthor = () => {
  console.log("firstAuthor");
  return (
    <>
      <h1>Ah bon, la comme ça ?</h1>
      <h2>
        <Link href="/"><a>Go back to home</a></Link>
      </h2>
    </>
  );
};

export default firstAuthor;
