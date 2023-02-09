import React from "react";
import { NavLink } from "react-router-dom";

function GithubButton() {
  return (
    <div className="flex flex-row-reverse max-w-7xl px-4 sm:px-6 lg:px-8">
      <NavLink
        to="https://github.com/jmontes33/apuntes-react"
        className="flex items-center justify-between w-28 bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="button"
        target="_blank"
      >
        GitHub
        <img src="src\assets\github.png" alt="github" className="h-5" />
      </NavLink>
    </div>
  );
}

export default GithubButton;
