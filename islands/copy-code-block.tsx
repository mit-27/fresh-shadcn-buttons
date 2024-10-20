import { asset, Head } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

const CodeBlock = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = asset("/scripts/copy-code-block.js");
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    });

    return (
        <>
        </>
    );
};

export default CodeBlock;
