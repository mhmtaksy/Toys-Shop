import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function CategoryPage(){
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
								<li><a href="/">Home</a></li>
								<li>Category results</li>
							</ul>
						</div>
					</section>					
					<ul className="item-product">																		
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/Icons-Land-Vista-Love-TeddyBear-RedRibbon.256.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Teddy Bear</a></span>								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/Designbolts-Free-Movie-Folder-Action.256.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Action&Figures</a></span>
								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/Graphicloads-Flat-Finance-Puzzle.256.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Puzzle</a></span>
								
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/Graphicloads-Polygon-New.256.png"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">New&Trading</a></span>
								
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
    
export default CategoryPage;