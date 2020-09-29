import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full py-5 lg:space-x-24 > * text-center mx-auto shadow">
        <Link href="/">
          <a className="py-2 px-5 rounded bg-transparent hover:bg-green-300 text-black hover:text-white duration-300">
            Home
          </a>
        </Link>
        <Link href="/categories">
          <a className="py-2 px-5 rounded bg-transparent hover:bg-green-300 text-black hover:text-white duration-300">
            Categories
          </a>
        </Link>
        <Link href="/about">
          <a className="py-2 px-5 rounded bg-transparent hover:bg-green-300 text-black hover:text-white duration-300">
            About
          </a>
        </Link>
  
      </div>
    </>
  );
};

export default Navbar;
