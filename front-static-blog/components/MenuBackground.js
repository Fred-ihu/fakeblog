import Link from "next/link";

const MenuBackground = ({openHamburgerMenu, setOpenHamburgerMenu}) => {
  return (
    <>
      <div className="static bg-green-300 h-screen w-screen flex justify-center items-center p-5">
        <div className="absolute top-0 right-0 mr-12 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="cursor-pointer text-gray-700 hover:text-white duration-300  w-10"
            onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="text-center">
          <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl" onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}>
            <Link href="/">Home</Link>
          </li>
          <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl" onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}>
            <Link href="/categories">Categories</Link>
          </li>
          <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl" onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBackground;
