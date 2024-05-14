import img from '../assets/img/member1.jpg'

function Content() {
    return (
        <div id="content">
            <div className="content-session">
                <h2 className="content-heading">THE BAND</h2>
                <p className="content-subheading">We love music</p>
                <p className="content-about">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="member-lists">
                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                    <div className="member-item">
                        <p className="member-name">Name</p>
                        <img src={img} alt="Name" className="member-img" />
                    </div>
                </div>
                <div className='clear'></div>
            </div>
            <div className="content-session">
                <h2 className="content-heading">TOUR DATES</h2>
                <p className="content-subheading">Remember to book your tickets!</p>
            </div>
            <div className="content-session">
                <h2 className="content-heading">CONTACT</h2>
                <p className="content-subheading">Fan? Drop a note!</p>
            </div>
        </div>
    );
}

export default Content;