import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={"Shadcn buttons for Deno's Fresh and Preact based framework."}
        />
        <meta name="keywords" content={"shadcn, fresh, preact, deno, button"} />
        <meta
          property="og:image"
          content={"https://fresh-shadcn-buttons.deno.dev/og-image.webp"}
        />
        <meta
          name="twitter:image"
          content={"https://fresh-shadcn-buttons.deno.dev/og-image.webp"}
        />
        <meta name="author" content={"Mit Suthar"} />
        <meta property="og:title" content={"Fresh Shadcn Buttons"} />
        <meta
          property="og:description"
          content={"Shadcn buttons for Deno's Fresh and Preact based framework."}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://fresh-shadcn-buttons.deno.dev/"}
        />
        <title>Fresh Shadcn Buttons</title>
        <link
          rel="preload"
          href={asset("/fonts/FixelVariable.woff2")}
          as="font"
          type="font/woff2"
          crossorigin="true"
        />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
