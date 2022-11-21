// deno-lint-ignore-file

import { Handlers, PageProps } from "$fresh/server.ts";
import { asset,Head } from "$fresh/runtime.ts";
import { CSS, render } from "$gfm";
import NavBar from "../utils/navbar.tsx";
import titleChange from '../utils/scr.tsx';

export const handler: Handlers<any> = {
  async GET(_req, ctx) {
	try {
	  return ctx.render();
	} catch (e) {}
  },
};

export default function PostPage() {
  return (
	<html>
	  <Head>
		<style dangerouslySetInnerHTML={{ __html: CSS }} />
		<link rel="stylesheet" href={asset("/style.css")} />
		<title id="waa">blog</title>
		<meta id="meta-title" property="og:title" content={"links"} />
		<meta id="meta-desc" property="og:description" content={"mutual links & my friendz!!"} />
		<meta id="meta-image" name="og:image" content={asset("avatar.jpg")} itemProp="image" />
		<meta name="theme-color" content="#CFF2FF" />
		<meta name="twitter:card" content="summary" />
		<script dangerouslySetInnerHTML={
			{
				__html: `var title = {origin: document.getElementById("waa").innerHTML, focus: 'o(≧∇≦o) wawa u back!',blur: '(TдT) dont go!!'};window.onfocus = function(){document.getElementById("waa").innerHTML = title.focus;setTimeout(() => document.getElementById("waa").innerHTML = title.origin, 1000)};window.onblur = function(){title.origin=document.getElementById("waa").innerHTML;document.getElementById("waa").innerHTML = title.blur};`
			}
		}/>
	  </Head>
	  <body>
		<NavBar back/>

		<main class="max-w-screen-md px-4 pt-16 mx-auto">
			<h1 class="text-4xl font-bold">friends!!</h1>
			<div class="mt-8 border(t gray-200)"></div>
			<div class="card">
				<a href="https://www.shirosakitagdl.top/" target="_blank">
					<img class="ava nomediumzoom medium-zoom-image" data-src="https://www.shirosakitagdl.top/img/1.webp" src="https://www.shirosakitagdl.top/img/1.webp">
						<div class="card-header">
							<div>
								<a href="https://www.shirosakitagdl.top/" target="_blank">TagDL</a>
							</div>
							<div class="info">
								大佬! awa
							</div>
						</div>
					</img>
				</a>
			</div>
		</main>
	</body>
	</html>
  );
}
