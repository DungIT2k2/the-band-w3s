import '../assets/fonts/themify-icons/themify-icons.css'

function Header() {
    function handleShowMenu(){
        const header = document.getElementById('header');
        header.classList.toggle('show-mobile')
    }
    return (
        <div id="header" className='header'>
            <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#band" onClick={handleShowMenu}>Band</a></li>
                <li><a href="#tour" onClick={handleShowMenu}>Tour</a></li>
                <li><a href="#contact" onClick={handleShowMenu}>Contact</a></li>
                <li>
                    <a href="#" onClick={handleShowMenu}>
                        More
                        <i className='nav-icon ti-angle-down'></i>
                    </a>
                    <ul className="subnav">
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#">Extras</a></li>
                        <li><a href="#">Media</a></li>
                    </ul>
                </li>
            </ul>
            <div id="search">
                <i className='nav-icon ti-search'></i>
            </div>
            <div className="mobile-menu" onClick={handleShowMenu}>
                <i className="nav-icon ti-menu"></i>
            </div>
        </div>
    );
}

export default Header;