import '../assets/fonts/themify-icons/themify-icons.css'

function Header() {
    return (
        <div id="header">
            <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#band">Band</a></li>
                <li><a href="#tour">Tour</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href="#">
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
        </div>
    );
}
export default Header;