import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold mb-4">React Components</h1>
            <p className="mb-4">
                Explore different variations of components in this project.
                Select a component below to view its variations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Navigation Bars</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/navbar/default"
                                className="text-blue-500 hover:underline"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/navbar/sticky"
                                className="text-blue-500 hover:underline"
                            >
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
                            <Link
                                to="/navbar/image"
                                className="text-blue-500 hover:underline"
                            >
                                Image
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
                                        Basic
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
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Hero</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/hero/default"
                                className="text-blue-500 hover:underline"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hero/simple"
                                className="text-blue-500 hover:underline"
                            >
                                Simple
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hero/overlay"
                                className="text-blue-500 hover:underline"
                            >
                                Overlay design
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hero/image"
                                className="text-blue-500 hover:underline"
                            >
                                Image
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hero/video"
                                className="text-blue-500 hover:underline"
                            >
                                Video
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hero/imageOverlay"
                                className="text-blue-500 hover:underline"
                            >
                                Image Overlay
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Stats</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/stats/default"
                                className="text-blue-500 hover:underline"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/stats/logo"
                                className="text-blue-500 hover:underline"
                            >
                                With Logo
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Logo Cloud</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/logoCloud/default"
                                className="text-blue-500 hover:underline"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logoCloud/big"
                                className="text-blue-500 hover:underline"
                            >
                                Big Cloud
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logoCloud/detailed"
                                className="text-blue-500 hover:underline"
                            >
                                Detailed
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logoCloud/carousel"
                                className="text-blue-500 hover:underline"
                            >
                                Carousel
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-2">
                    <h3 className="text-2xl mb-4">FAQs</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/faq/detailed"
                                className="text-blue-500 hover:underline"
                            >
                                Detailed
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq/accordion"
                                className="text-blue-500 hover:underline"
                            >
                                Accordion
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq/box"
                                className="text-blue-500 hover:underline"
                            >
                                Box Accordion
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Stats</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/button/default"
                                className="text-blue-500 hover:underline"
                            >
                                Button
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-2">
                    <h3 className="text-2xl mb-4">Footers</h3>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                to="/footer/default"
                                className="text-blue-500 hover:underline"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/footer/simple"
                                className="text-blue-500 hover:underline"
                            >
                                Simple
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/footer/oneline"
                                className="text-blue-500 hover:underline"
                            >
                                One line
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
