import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from 'react-router-dom'; 

function BrandsPage(){
    return(
        <Fragment>
            <div id="wrapper">
		<div className="wrapper-holder">
        <Menu/>		
			<section className="main">
				<div className="content">
					<section className="bar">
						<div className="bar-frame">
							<ul className="breadcrumbs">
							    <li><Link to="/categorypage">Category</Link></li>
								<li>Brands results</li>
							</ul>
						</div>
					</section>					
					<ul className="item-product">																		
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/marvellogo.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel Studio</a></span>								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/100597993_10158479169693485_4678988379294007296_n.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">DC Studio</a></span>
								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/puzzle-logo_609277-5566.avif"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Puzzle</a></span>
								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/teddy.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Teddy Bear</a></span>
								
							</div>
						</li>																																							
					</ul>					
				</div>
			</section>
		</div>
		<Footer/>	
	</div>
	
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="assets/js/jcarousellite.js"></script>
	<script type="text/javascript" src="assets/js/jquery.placeholder.js"></script>
	<script type="text/javascript" src="assets/js/jquery.uniform.min.js"></script>
	<script type="text/javascript" src="assets/js/fancySelect.js"></script>
	<script type="text/javascript" src="assets/js/jquery.bxslider.js"></script>
	<script src="assets/js/jquery-ui-1.10.4.custom.js"></script>
	<script type="text/javascript" src="assets/js/main.js"></script>
        </Fragment>
    )
    }
    
export default BrandsPage;