import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="mx-auto shadow p-5">
      <nav className="flex md:justify-between items-center">
        <div className="flex justify-between w-full">
          <Link href="/"><img className="ml-8 h-10" src="/logo_staticblogV1.svg"/></Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="md:hidden text-green-300 w-10  mr-8"
            onClick={() => setCount(count + 1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul className="hidden md:flex md:flex-row" id="mobileMenu">
          <li className="pr-5">
            <Link href="/">
              <div className="cursor-pointer py-2 px-5 rounded hover:bg-green-300 text-gray-600 hover:text-white duration-300 text-lg">
                Home
              </div>
            </Link>
          </li>
          <li className="pr-5">
            <Link href="/categories">
              <div className="cursor-pointer py-2 px-5 rounded hover:bg-green-300 text-gray-600 hover:text-white duration-300 text-lg">
                Categories
              </div>
            </Link>
          </li>
          <li className="pr-5">
            <Link href="/about">
              <div className="cursor-pointer py-2 px-5 rounded hover:bg-green-300 text-gray-600 hover:text-white duration-300 text-lg">
                About
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;