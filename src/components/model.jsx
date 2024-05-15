function Model( {unshow}) {
    function handleClick (event) {
        event.stopPropagation();
    }
    const notClose = (event) => {
        handleClick(event);    
    }
    return (
        <div id="model" onClick={unshow}>
            <div className="model-form" onClick={notClose}>
                <div className="model-close" onClick={unshow}>
                    <i className="ti-close"></i>
                </div>
                <div className="model-heading">
                    <i className="heading-icon ti-bag"></i>
                    Tickets
                </div>
                <div className="model-body">
                    <label htmlFor="model-quatity" className="item-name">
                        <i className="item-icon ti-shopping-cart"></i>
                        Tickets, $15 per person
                    </label>
                    <input type="text" id="model-quatity"className="item-input" placeholder="How many?"/>
                    <label htmlFor="model-email" className="item-name">
                        <i className="item-icon ti-user"></i>
                        Send To
                    </label>
                    <input type="email" id="model-email" className="item-input" placeholder="Enter email"/>
                    <button className="btn-pay">Pay <i className="ti-check"></i></button>
                </div>
                <div className="model-footer">
                    <p className="help">Need <a href="#">help?</a></p>
                </div>
            </div>
        </div>
    )
}

export default Model;