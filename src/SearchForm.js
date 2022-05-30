import React from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className=" m-4">
          <img
            className="rounded-lg w-14"
            src="https://api.lorem.space/image/movie?w=150&h=220"
            alt='logo'
          />
        </div>
        <h1>
          <a
            href="/"
            className="font-bold font-serif text-2xl m-2 italic tracking-wide "
          >
            Movie-Library
          </a>
        </h1>
      </div>
      <div className="flex-none gap-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control  ">
            <input
              type="text"
              placeholder="Search Movies..."
              className="input input-bordered bg-white "
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
