export default function NavBar(props: { back?: boolean }){
    return (
        <nav class="navbar">
            <div class="nav-left">
                <a href="/" class="nav-title">純白</a>
            </div>
            <div class="nav-right">
                <a href="/links">Friends!!</a>
                <a href="/about-me">About</a>
                <a href="/contact-me">Contact</a>
            </div>
        </nav>
    )
}