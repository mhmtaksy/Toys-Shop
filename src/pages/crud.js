import { Products } from "../Products";
import { Link } from 'react-router-dom'; 

function Crud() {
    return (        
<div className="header-holder">
				<header id="header">
					<span className="logo"><Link to="/">ToyStore</Link></span>
					<div className="tools-nav_holder">
                    <div className="checkout">
                            <Link to="/" className="admin">Home Page</Link>
						</div>						                     
					</div>
					<div className="clear"></div>
					<a className="menu_trigger" href="#">menu</a>
					<nav id="nav">
						<ul className="navi">
							<li>
                            <Link to="/Category">Category Crud</Link>
                            </li>
							<li><Link to="/Brands">Brands Crud</Link></li>
							<li><Link to="/Products">Products Crud</Link></li>
							<li><Link to="/Activities">Activity Crud</Link></li>
						</ul>
					</nav>
				</header>               
			</div>
  );
};
     
export default Crud;