import { CSS, render } from "@deno/gfm";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CodeBlock from "../../islands/copy-code-block.tsx";
import { renderMarkdown } from "../../utils/markdown.ts";

interface SetupPageProps {
    markdown: string;
    data: Record<string, unknown>;
}

export const handler: Handlers<SetupPageProps> = {
    async GET(_req, ctx) {
        const rawMarkeddown = await Deno.readTextFile("./data/setup.md");
        return ctx.render({ markdown: rawMarkeddown, data: {} });
    },
};

const DocsSetup = ({ data }: PageProps<SetupPageProps | null>) => {
    if (!data) return null;

    return (
        <div>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: CSS }} />
                {/* <CodeBlock /> */}
                {/* <script src={asset("/scripts/copy-code-block.js")} defer /> */}
            </Head>
            <CodeBlock />
            <div className="p-5">
                <div
                    class="markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: renderMarkdown(data?.markdown).html,
                    }}
                />
            </div>
        </div>
    );
};

export default DocsSetup;
