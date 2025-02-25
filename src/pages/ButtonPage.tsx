import React from "react";
import Button from "../components/Button/Button";

const ButtonPage: React.FC = () => {
    const buttonVariations: { label: string; element: JSX.Element }[] = [
        {
            label: "Default",
            element: (
                <Button onClick={() => alert("Clicked!")}>Click Me</Button>
            ),
        },
        {
            label: "Primary",
            element: (
                <Button
                    color="bg-blue-500 text-white"
                    onClick={() => alert("Primary Clicked!")}
                >
                    Primary Button
                </Button>
            ),
        },
        {
            label: "Danger",
            element: (
                <Button
                    color="bg-red-500 text-white"
                    onClick={() => alert("Danger Clicked!")}
                >
                    Danger Button
                </Button>
            ),
        },
        {
            label: "Success",
            element: (
                <Button
                    color="bg-green-500 text-white"
                    onClick={() => alert("Success Clicked!")}
                >
                    Success Button
                </Button>
            ),
        },
        {
            label: "Warning",
            element: (
                <Button
                    color="bg-yellow-500 text-black"
                    onClick={() => alert("Warning Clicked!")}
                >
                    Warning Button
                </Button>
            ),
        },
    ];

    return (
        <div className="flex flex-col items-center space-y-4 mt-8">
            <h1 className="text-2xl font-bold">Button Variations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {buttonVariations.map((btn, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {btn.element}
                        <span className="text-sm mt-1">{btn.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ButtonPage;
