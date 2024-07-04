import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header id='head'>
        <nav className="navbar" >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#nextSection">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#sl">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}