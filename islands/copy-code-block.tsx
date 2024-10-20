import { asset, Head } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

const CodeBlock = () => {
    useEffect(() => {
        console.log("hello in useEffect");
        // Ensure the script runs after the component is mounted
        const script = document.createElement("script");
        script.src = asset("/scripts/copy-code-block.js");
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts
            document.head.removeChild(script);
        };
    });

    return (
        <div>
        </div>
    );
};

export default CodeBlock;
