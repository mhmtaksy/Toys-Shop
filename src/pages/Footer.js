import React, { Fragment } from "react";

function Footer() {
    return ( 
        <Fragment>
            <footer id="footer">
			<div className="footer-content">
				<ul className="left_side">
					<li>
						<span>Our mission:</span>
						{ <p>Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia.</p> }
					</li>
					<li>
						<span>Popular posts:</span>
						<a href="#">Perspiciatis unde omnis</a>
						<a href="#">Numquam eius</a>
						<a href="#">Corporis suscipit laboriosam</a>
						<a className="last" href="#">Neque porro quisquam</a>
					</li>
					<li>
						<span>Contact us:</span>
						<p>ToyStore INC.<br />6737 Arch St, PA 19107</p>
						<p>Tel. (421) 562 524 534<br />office@toystore.com</p>
						
					</li>
				</ul>
				<ul className="right_side">
					<li>
						<span>Social media:</span>
						<div className="social">
							<a href="#" className="fb">.</a>
							<a href="#" className="tw">.</a>
						</div>
						<div className="social">
							<a href="#" className="gl">.</a>
							<a href="#" className="pn">.</a>
						</div>
					</li>
				</ul>
				<div className="clear"></div>
				<p className="copy">Copyright 2024 Toystore. All rights reserved.</p>
			</div>
		</footer>	
        </Fragment>
     );
}

export default Footer;