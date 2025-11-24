import './Navbar.css'
import reactLogoSrc from '../assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav id="nav">
                <img src={reactLogoSrc} className="logo" alt="React Logo"></img>
                <span id="title">ReactFacts</span>
            </nav>
        </header>
    )
}