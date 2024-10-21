import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 min-w-screen items-center flex flex-col justify-center">
        <h1 class="text-4xl font-bold">404 - Page not found</h1>
        <p class="my-4">
          The page you were looking for doesn't exist.
        </p>
        <a href="/" class="underline">Go back home</a>
      </div>
    </>
  );
}
