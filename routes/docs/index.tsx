import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req, ctx) {
        return new Response("", {
            status: 307,
            headers: { "location": "/docs/installation" },
        });
    },
};
