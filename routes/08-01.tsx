import { Handlers, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";


// deno-lint-ignore no-explicit-any
export const handler: Handlers<any> = {
  GET(_req, ctx) {
    return ctx.render([])
  },
};

// deno-lint-ignore no-explicit-any
export default function BlogIndexPage(props: PageProps<any[]>) {
  return (
    <>
      <h1>
        thats correct
      </h1>
    </>
  );
}