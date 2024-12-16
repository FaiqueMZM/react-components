import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Component Showcase</h1>
      <p className="mb-4">
        Explore different variations of components in this project. Select a
        component below to view its variations.
      </p>
      <ul className="list-disc ml-8">
        <li>
          <Link to="/navbars/default" className="text-blue-500 hover:underline">
            Navbar - Default
          </Link>
        </li>
        <li>
          <Link to="/navbars/sticky" className="text-blue-500 hover:underline">
            Navbar - Sticky
          </Link>
        </li>
        <li>
          <Link
            to="/navbars/transparent"
            className="text-blue-500 hover:underline"
          >
            Navbar - Transparent
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
