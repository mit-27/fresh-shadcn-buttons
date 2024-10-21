import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={"Shadcn buttons for Deno's Fresh."} />
        <meta name="keywords" content={"shadcn, fresh, preact, deno, button"} />
        <meta name="author" content={"Mit Suthar"} />
        <meta property="og:title" content={"Shadcn Fresh Buttons"} />
        <meta
          property="og:description"
          content={"Shadcn buttons for Deno's Fresh."}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={""} />
        <title>fresh-shadcn-buttons</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
