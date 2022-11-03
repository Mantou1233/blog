import { Handlers, PageProps } from "$fresh/server.ts";
import { asset,Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, render } from "$gfm";
import NavBar from "../utils/navbar.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch (e) {
      return new Response(`404: Cannot find /${ctx.params.slug}`);
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <link rel="stylesheet" href={asset("/style.css")} />
        <title>blog</title>
        <meta id="meta-title" property="og:title" content={"blog" + post.title} />
        <meta id="meta-desc" property="og:description" content={post.snippet} />
        <meta id="meta-image" name="og:image" content={asset("avatar.jpg")} itemProp="image" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <body>
        <NavBar back/>

        <main class="max-w-screen-md px-4 pt-16 mx-auto">
          <h1 class="text-4xl font-bold">{post.title}</h1>
          <time class="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div
            class="mt-8 markdown-body border(t gray-200)"
            dangerouslySetInnerHTML={{ __html: render(post.content) }}
          />
        </main>
      </body>
    </html>
  );
}
