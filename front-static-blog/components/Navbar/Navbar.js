import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full py-5 shadow flex justify-between">
    <div className="ml-5"><img src="/logo_staticblogV1.svg" alt="static blog logo" className="h-10"/></div>
        <div>
          <Link href="/">
            <a className="py-2 px-10 rounded hover:bg-green-300 text-black hover:text-white duration-300">
              Home
            </a>
          </Link>
          <Link href="/categories">
            <a className="py-2 px-10 rounded hover:bg-green-300 text-black hover:text-white duration-300">
              Categories
            </a>
          </Link>
          <Link href="/about">
            <a className="py-2 px-10 rounded hover:bg-green-300 text-black hover:text-white duration-300">
              About
            </a>
          </Link>
        </div>
        <div className="mr-5">SRCH</div>
  
      </div>
    </>
  );
};

export default Navbar;
