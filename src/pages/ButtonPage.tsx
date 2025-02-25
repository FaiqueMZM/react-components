import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";

const ButtonPage: React.FC = () => {
    const { variation } = useParams<{ variation: string }>();

    switch (variation) {
        case "default":
            return <Button  />;
        default:
            return (
                <div className="text-red-500 text-center mt-4">
                    Button variation not found!
                </div>
            );
    }
};

export default ButtonPage;
