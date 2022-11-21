export default function NavBar(props: { back?: boolean }){
    if(props.back){
        return (
            <nav class="navbar">
                <a href="/" class="left"> <span class="arrow">←</span>Home</a>
                <a href="/links">Friends!!</a>
                <a href="/about-me">About</a>
                <a href="/contact-me">Contact</a>
            </nav>
      )
    }
    return (
        <nav class="navbar">
          <a href="/links">Friends!!</a>
          <a href="/about-me">About</a>
          <a href="/contact-me">Contact</a>
        </nav>
    )
}