import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-900 h-24 rounded-md p-4 w-full">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-nextjs"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
          <path d="M15 12v-3"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-visual-studio"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
