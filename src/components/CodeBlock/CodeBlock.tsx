import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

const CodeBlock = ({ code }: { code: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-auto w-screen lg:w-auto">
      <code className="language-javascript"> {code}</code>
    </pre>
  );
};

export default CodeBlock;
