import { ReactElement } from "react";

interface ButtonProps {
  handleClick: () => void;
  content: string;
}

function ButtonSecondary({ handleClick, content }: ButtonProps): ReactElement {
  return (
    <button
      className={`p-2 rounded-lg border border-black text-black cursor-pointer hover:bg-gray-100`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export default ButtonSecondary;
