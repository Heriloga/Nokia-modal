import { ReactElement } from "react";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import { examples } from "../components/CodeBlock/examples";

function Docs(): ReactElement {
  return (
    <div className="mt-64 h-screen">
      {examples.map((example, exampleIdx) => (
        <div className="bg-white p-5 mb-5" key={exampleIdx}>
          <h1 className="text-xl text-center">{example.title}</h1>
          <p className="text-md p-4">{example.desc}</p>

          <CodeBlock code={example.code} />
        </div>
      ))}
    </div>
  );
}

export default Docs;
