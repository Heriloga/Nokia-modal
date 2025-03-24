import { ReactElement } from "react";

interface ButtonProps {
  handleClick: () => void;
  content: string;
}

function ButtonPrimary({ handleClick, content }: ButtonProps): ReactElement {
  return (
    <button
      className={`p-2 rounded-lg border-none bg-blue-600 text-white cursor-pointer hover:bg-blue-900`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export default ButtonPrimary;
