import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const slug = ctx.route;
        if (slug === "/docs/buttons") {
            return new Response("", {
                status: 307,
                headers: { "location": "/docs/buttons" },
            });
        }

        return new Response("", {
            status: 307,
            headers: { "location": "/docs/setup" },
        });
    },
};
