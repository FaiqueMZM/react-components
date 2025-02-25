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
        success: (
            <Button
                color="bg-green-500 text-white"
                onClick={() => alert("Success Clicked!")}
            >
                Success Button
            </Button>
        ),
        warning: (
            <Button
                color="bg-yellow-500 text-black"
                onClick={() => alert("Warning Clicked!")}
            >
                Warning Button
            </Button>
        ),
    };

    return (
        <div className="flex flex-col items-center space-y-4 mt-8">
            <h1 className="text-2xl font-bold">Button Variations</h1>

            {/* If a variation is provided, show only that button */}
            {variation
                ? buttonVariations[variation] || (
                      <div className="text-red-500 text-center mt-4">
                          Button variation not found!
                      </div>
                  )
                : // Otherwise, show all buttons
                  Object.values(buttonVariations)}
        </div>
    );
};

export default ButtonPage;
