import img from '../assets/img/member1.jpg'
import place1 from '../assets/img/place1.jpg'
import place2 from '../assets/img/place2.jpg'
import place3 from '../assets/img/place3.jpg'
import map from '../assets/img/map.jpg'

function Content({ show }) {
    return (
        <div id="content">
            {/* Start: Band Session */}
            <div id="band" className="content-session">
                <h2 className="content-heading">THE BAND</h2>
                <p className="content-subheading">We love music</p>
                <p className="content-about">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="row member-lists">
                    <div className="col col-third">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                    <div className="col col-third">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                    <div className="col col-third">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                </div>
                <div className='clear'></div>
            </div>

            {/* Start: Tour Session */}
            <div id="tour" className="tour-session">
                <div className="content-session">
                    <h2 className="content-heading text-white">TOUR DATES</h2>
                    <p className="content-subheading text-white">Remember to book your tickets!</p>
                    <ul className="tickets-list">
                        <li>September <span className="sold-out">Sold out</span></li>
                        <li>October <span className="sold-out">Sold out</span></li>
                        <li>November <span className="quantity">3</span></li>
                    </ul>
                    <div className="row places-list">
                        <div className="col col-third">
                            <img src={place1} alt="" className="place-img" />
                            <div className="place-content">
                                <h3 className="place-heading">New York</h3>
                                <p className="place-date">Fri 27 Nov 2016</p>
                                <p className="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="buy-tickets-btn" onClick={show}>Buy tickets</button>
                            </div>
                        </div>
                        <div className="col col-third">
                            <img src={place2} alt="" className="place-img" />
                            <div className="place-content">
                                <h3 className="place-heading">Paris</h3>
                                <p className="place-date">Sat 28 Nov 2016</p>
                                <p className="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="buy-tickets-btn" onClick={show}>Buy tickets</button>
                            </div>
                        </div>
                        <div className="col col-third">
                            <img src={place3} alt="" className="place-img" />
                            <div className="place-content">
                                <h3 className="place-heading">San Francisco</h3>
                                <p className="place-date">Sun 29 Nov 2016</p>
                                <p className="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="buy-tickets-btn" onClick={show}>Buy tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start: Contact Session */}
            <div id="contact" className="content-session">
                <h2 className="content-heading">CONTACT</h2>
                <p className="content-subheading">Fan? Drop a note!</p>
                <div className="row contact-body">
                    <div className="col col-second contact-info">
                        <p className="contact-item"><i className="ti-location-pin"></i> Chicago, US</p>
                        <p className="contact-item"><i className="ti-mobile"></i> Phone: +00 151515</p>
                        <p className="contact-item"><i className="ti-email"></i> Email: mail@mail.com</p>
                    </div>
                    <div className="col col-second">
                        <form action="">
                            <div className="row">
                                <div className="col col-second">
                                    <input type="text" placeholder="Name" required className="form-item" />
                                </div>
                                <div className="col col-second">
                                    <input type="email" placeholder="Email" required className="form-item" />
                                </div>
                            </div>
                            <div className="row row-message">
                                <div className="col col-full">
                                    <input type="text" placeholder="Message" required className="form-item" />
                                </div>
                            </div>
                            <input type="submit" className="form-submit-btn" value="SEND"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map-session">
                <img src={map} alt="Map" className='map-img'/>
            </div>
        </div>
    );
}

export default Content;