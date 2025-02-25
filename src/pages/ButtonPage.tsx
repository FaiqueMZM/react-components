import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";

const ButtonPage: React.FC = () => {
    const { variation } = useParams<{ variation?: string }>();

    const buttonVariations: { [key: string]: JSX.Element } = {
        default: <Button onClick={() => alert("Clicked!")}>Click Me</Button>,
        primary: (
            <Button
                color="bg-blue-500 text-white"
                onClick={() => alert("Primary Clicked!")}
            >
                Primary Button
            </Button>
        ),
        danger: (
            <Button
                color="bg-red-500 text-white"
                onClick={() => alert("Danger Clicked!")}
            >
                Danger Button
            </Button>
        ),
    };

    return (
        buttonVariations[variation || "default"] || (
            <div className="text-red-500 text-center mt-4">
                Button variation not found!
            </div>
        )
    );
};

export default ButtonPage;
