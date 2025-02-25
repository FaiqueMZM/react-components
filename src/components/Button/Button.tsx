import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
    color?: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color = "bg-transparent text-black border border-black",
    onClick,
    className = "",
    icon,
}) => {
    return (
        <button
            onClick={onClick}
            className={`m-2 p-2 rounded-full flex items-center justify-center ${color} ${className}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
