import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Index(){
    return(
        <Fragment>
            <div id="wrapper">
		<div className="wrapper-holder">
			<Menu/>
			<section className="main">
				<div className="content">				
					<div className="box_images">
						<a href="/"><img src="assets/images/Ekran görüntüsü 2024-02-24 002132.png" alt="" /></a>
					</div>
					<div className="clear"></div>
					<section className="container">
						<div className="bottom-slider">
							<div className="slides">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
							</div>
						</div>
					</section>
					<div className="clear"></div>
				</div>			
			</section>
		</div>
		<Footer/>

        </div>
        </Fragment>
    )
    }
    
export default Index;