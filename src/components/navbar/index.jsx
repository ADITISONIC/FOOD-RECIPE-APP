import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5">
      {/* App Title */}
      <h2 className="text-2xl font-semibold">FoodRecipe</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>

      {/* Navigation Links */}
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipe-item/:id"
            className="text-black hover:text-gray-700 duration-300"
          >
            Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
