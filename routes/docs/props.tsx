import { CSS, render } from "@deno/gfm";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

interface SetupPageProps {
    markdown: string;
    data: Record<string, unknown>;
}

export const handler: Handlers<SetupPageProps> = {
    async GET(_req, ctx) {
        const rawMarkeddown = await Deno.readTextFile("./data/props.md");
        return ctx.render({ markdown: rawMarkeddown, data: {} });
    },
};

const PropsSetup = ({ data }: PageProps<SetupPageProps | null>) => {
    if (!data) return null;

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: CSS }} />
                <script src={asset("/scripts/copy-code-block.js")} defer>
                </script>
            </Head>
            <div className="p-5">
                <div
                    class="markdown-body"
                    dangerouslySetInnerHTML={{ __html: render(data?.markdown) }}
                />
            </div>
        </>
    );
};

export default PropsSetup;
