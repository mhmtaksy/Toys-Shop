import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ProductsPage(){
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
								<li><Link to="/brandspage">Brands</Link></li>
								<li>Product results</li>
							</ul>
						</div>
					</section>					
					<ul className="item-product">
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/188016031_180115827335694_9162853187347805636_n_b8660a8f-704d-47b9-b7de-3672b31aa924.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel’s Spider-Man – Spider-Man (Anti-Ock Suit)</a></span>
								<span>$65.00</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/259177344_5114655605213214_1156086189571150199_n.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Avengers: Endgame -Captain Marvel</a></span>
								<span>$49.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/288070233_5776424505702984_8069120689601234891_n-1.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel Comics – 1/6th scale Iron Man</a></span>
								<span>$20.00</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/273472384_5424065644272207_3336007504980364043_n.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel’s Spider-Man – Spider-Man (Classic Suit)</a></span>
								<span>$59.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/296186253_479602113790237_4685549400925911608_n.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel’s Daredevil – Daredevil</a></span>
								<span>$49.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/92811371_3402233966455395_57914090638540800_n-1.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Marvel Future Fight — The Punisher</a></span>
								<span>$49.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="#"><img src="assets/images/15172_05.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">McFarlane Toys DC Multiverse Batman Armour</a></span>
								<span>$49.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/PhotoRoom_20221130_155322.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">DC Comics Batmobile 1989 Version</a></span>
								<span>$80.00</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/wonderwoman.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">DC Comics 1:4 Scale Wonder Woman Statue</a></span>
								<span>$15.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/1_11.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Beast Kingdom DC Comics Darkseid</a></span>
								<span>$9.99</span>
							</div>
						</li>																			
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/81VGU-n7EfL._AC_SX522_.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Collection Puzzle - Coppelia</a></span>
								<span>$9.99</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/61vW7rLmTzL._AC_SY741_.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Anatolian Puzzle - Galata Tower</a></span>
								<span>$9.99</span>
							</div>
						</li>	
						<li>
							<div className="item">
								<div className="image">
									<a href="product.html"><img src="assets/images/71XMkQGnMML._AC_SX522_.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Anatolian Puzzle - Argentina Theatre</a></span>
								<span>$9.99</span>
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
    
export default ProductsPage;