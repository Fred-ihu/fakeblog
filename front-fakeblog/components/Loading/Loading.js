import React from "react";

const Loading = () => {
  //   console.log('Loading')
return (
    <div className="mx-auto w-full m-10">
    <button
        type="button"
        className="mx-auto bg-green-300 px-5 py-2 rounded-lg flex items-center animate-pulse"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="motion-safe:animate-spin h-10 w-10 mr-5 text-gray-700"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        </svg>
        <p className="text-gray-700 text-lg font-bold">Loading</p>
    </button>
    </div>
);
};

export default Loading;
