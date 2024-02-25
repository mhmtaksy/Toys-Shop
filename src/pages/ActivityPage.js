import React,{Fragment} from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function ActivityPage(){
    return(
        <Fragment>
                <Fragment>
            <div id="wrapper">
		<div className="wrapper-holder">
        <Menu/>		
			<section className="main">
				<div className="content">
					<section className="bar">
						<div className="bar-frame">
							<ul className="breadcrumbs">
								<li><a href="ProductsPage">Products</a></li>
								<li>Activities results</li>
							</ul>
						</div>
					</section>					
					<ul className="item-product">																		
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/cevahir-avm-1.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Location:Cevahir AVM</a></span>		
                                <span className="name">Activity Name:Trampoline Activity</span>		
                                <span className="name">Activity Age:8-10 age Kids</span>	
                                					
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/cevahir-avm-1.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Location:Cevahir AVM</a></span>		
                                <span className="name">Activity Name:Action Activity</span>		
                                <span className="name">Activity Age:13+</span>
                                	
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/trumph.jpg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Location:Trump AVM</a></span>		
                                <span className="name">Activity Name:Puzzle Activity</span>		
                                <span className="name">Activity Age:8-10 age Kids</span>
							</div>
						</li>
						<li>
							<div className="item">
								<div className="image">
									<a href="BrandsPage"><img src="assets/images/0005720_coming-soon-page_550.jpeg"  alt="" /></a>
								</div>
								<span className="name"><a href="product.html">Coming Soon..</a></span>
								
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
        </Fragment>
    )
    }
    
export default ActivityPage;