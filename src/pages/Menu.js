import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <Fragment>
<div className="header-holder">
				<header id="header">
					<span className="logo"><Link to="/">ToyStore</Link></span>
					<div className="tools-nav_holder">
                    <div className="checkout">
                            <Link to="/Login" className="admin">Admin Panel</Link>
						</div>						                     
					</div>
					<div className="clear"></div>
					<a className="menu_trigger" href="#">menu</a>
					<nav id="nav">
						<ul className="navi">
							<li>
                            <Link to="/categorypage">Categories</Link>
                            </li>
							<li><Link to="/brandspage">Brands</Link></li>
							<li><Link to="/productspage">Products</Link></li>
							<li><Link to="/activitypage">Activities</Link></li>
						</ul>
					</nav>
				</header>               
			</div>
        </Fragment>
     );
}

export default Menu;