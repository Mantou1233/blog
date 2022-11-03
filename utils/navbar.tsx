import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function NavBar(props: { back?: boolean }){
    if(props.back){
        return (
            <nav class="navbar">
                <a href="/" class="left"> <span class="arrow">←</span>Home</a>
                <a href="/about-me">About</a>
                <a href="/contact-me">Contact</a>
            </nav>
      )
    }
    return (
        <nav class="navbar">
          <a href="/about-me">About</a>
          <a href="/contact-me">Contact</a>
        </nav>
    )
}