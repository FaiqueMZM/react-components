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
      <div className="my-4">
        <h3 className="text-2xl mb-4">Navigation Bars</h3>
        <ul className="list-disc ml-8">
          <li>
            <Link
              to="/navbar/default"
              className="text-blue-500 hover:underline"
            >
              Default
            </Link>
          </li>
          <li>
            <Link to="/navbar/sticky" className="text-blue-500 hover:underline">
              Sticky
            </Link>
          </li>
          <li>
            <Link
              to="/navbar/transparent"
              className="text-blue-500 hover:underline"
            >
              Transparent
            </Link>
          </li>
          <li>
            Bottom Navbars
            <ul className="list-disc list-inside">
              <li>
                <Link
                  to="/botnavbar/default"
                  className="text-blue-500 hover:underline"
                >
                  Default
                </Link>
              </li>
              <li>
                <Link
                  to="/botnavbar/rounded"
                  className="text-blue-500 hover:underline"
                >
                  Rounded
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-2xl mb-4">Stats</h3>
        <ul className="list-disc ml-8">
          <li>
            <Link to="/stats/default" className="text-blue-500 hover:underline">
              Default
            </Link>
          </li>
          <li>
            <Link to="/stats/logo" className="text-blue-500 hover:underline">
              With Logo
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-2xl mb-4">Footers</h3>
        <ul className="list-disc ml-8">
          <li>
            <Link
              to="/footer/default"
              className="text-blue-500 hover:underline"
            >
              Default
            </Link>
          </li>
          <li>
            <Link to="/footer/simple" className="text-blue-500 hover:underline">
              Simple
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
