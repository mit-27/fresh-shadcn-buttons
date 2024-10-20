import { asset, Head } from "$fresh/runtime.ts";

const CodeBlock = () => {
    return (
        <div f-client-nav={false}>
            <Head>
                <script src={asset("/scripts/copy-code-block.js")} defer>
                </script>
            </Head>
        </div>
    );
};

export default CodeBlock;
