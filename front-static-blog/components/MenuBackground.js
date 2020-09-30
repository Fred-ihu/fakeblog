import Link from 'next/link';

const MenuBackground = () => {
  console.log("MenuBackground");
  return (
    <div className="bg-green-300 h-screen w-screen flex justify-center items-center">
      <ul className="text-center">
        <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl">
          <Link href="/">
              Home
          </Link>
        </li>
        <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl">
          <Link href="/categories">
              Categories
          </Link>
        </li>
        <li className="py-10 text-gray-700 hover:text-white duration-300 font-bold text-3xl">
          <Link href="/about">
              About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBackground;
