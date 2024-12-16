import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold mb-4">React Components</h1>
      <p className="mb-4">
        Explore different variations of components in this project. Select a
        component below to view its variations.
      </p>
      <h3 className="text-2xl mb-4">Navigation Bars</h3>
      <ul className="list-disc ml-8">
        <li>
          <Link to="/navbars/default" className="text-blue-500 hover:underline">
            Default
          </Link>
        </li>
        <li>
          <Link to="/navbars/sticky" className="text-blue-500 hover:underline">
            Sticky
          </Link>
        </li>
        <li>
          <Link
            to="/navbars/transparent"
            className="text-blue-500 hover:underline"
          >
            Transparent
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
