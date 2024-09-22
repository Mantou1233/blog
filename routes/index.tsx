import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { asset, Head } from "$fresh/runtime.ts";
import NavBar from "../utils/navbar.tsx";
import titleChange from '../utils/scr.tsx';

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <html>
      <Head>
        <title id="waa">mantou's blog</title>
        <link rel="stylesheet" href={asset("/style.css")} />
        <meta id="meta-title" property="og:title" content="Mantou's blog" />
        <meta id="meta-desc" property="og:description" content="Website 4 me to share life~" />
        <meta id="meta-image" name="og:image" content={asset("avatar.jpg")} itemProp="image" />
        <meta name="theme-color" content="#CFF2FF" />
        <meta name="twitter:card" content="summary" />
        {<script dangerouslySetInnerHTML={
            {
                __html: `var title = {origin: document.getElementById("waa").innerHTML, focus: 'o(≧∇≦o) wawa u back!',blur: '(TдT) dont go!!'};window.onfocus = function(){document.getElementById("waa").innerHTML = title.focus;setTimeout(() => document.getElementById("waa").innerHTML = title.origin, 1000)};window.onblur = function(){title.origin=document.getElementById("waa").innerHTML;document.getElementById("waa").innerHTML = title.blur};`
            }
        }/>}
      </Head>
      <body>

        <NavBar />

        <main class="max-w-screen-md px-4 pt-16 mx-auto">
          <div id="avatar-sector">
            <header class="title">
              <img class="avatar" src={asset("/avatar.jpg")} />
              <h1><span class="gradient">mantou!</span></h1>
            </header>
          </div>
          <div class="mt-8">
            {posts.map((post) => <PostCard post={post} />)}
          </div>
        </main>
      </body>
    </html>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <div id="page-sector">
        <a class="sm:col-span-2" href={`/${post.slug}`}>
          <h3 class="title text(3xl gray-900) font-bold">
            {post.title}
          </h3>
          <div class="date">
            <time class="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </time>
          </div>
        </a>
      </div>
      <div class="mt-4 text-gray-900">
        {post.snippet}
      </div>
    </div>
  );
}
