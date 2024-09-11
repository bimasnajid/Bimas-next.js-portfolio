import React, { ReactNode } from "react";

interface FixedButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FixedButton: React.FC<FixedButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-2 -left-2 md:left-10 flex justify-center items-center rounded-full p-4 transition duration-300 ease-in-out z-50 bg-transparent"
  >
    {children}
  </button>
);

export default FixedButton;
