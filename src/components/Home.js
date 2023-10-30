import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
            <div>
                
 {/* <!-
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Are you ready to relax? </h2>
								<p>Make Your Own Style, With as..</p>
								
								
								<Link to='/booking' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg2">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">We Help to grow your hair as well beard </h4>
								<p>Slide 2</p>
								<Link to='/booking' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg3">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
							<h2 class="movetxt agile-title text-capitalize">We Design and Create Hair Style Latest</h2>
							<p>Slide 3</p>
							<Link to='/booking' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg4">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">We design latest trending haircuts </h4>
								<p>slide 4.</p>
								<Link to='/booking' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navigation"> 
			<div>
			  <label for="slides_1"></label>
			  <label for="slides_2"></label>
			  <label for="slides_3"></label>
			  <label for="slides_4"></label>
			</div>
		</div>
	</div>
</div>
// {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
    <section class="content-info py-5" id="about">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">

                <div class="title-desc text-center px-lg-5">
					<img src="assets/images/about-img-virat.jpg" alt="news image" class="img-fluid" />
					<h3 class="heading text-center mb-3 mb-sm-5">BRAND AMBASSADOR: Virat Kohli</h3>
					<p class="px-lg-5">Virat Kohli, the Indian cricket superstar, has been known for his trendy and evolving hairstyles and beard styles over the years.
					Virat Kohli's hairstyle and grooming choices have often set trends and inspired fans to try out different looks.</p><br></br>
                    <h3 class="heading text-center mb-3 mb-sm-5">THE SALOON</h3>
                    <p class="px-lg-5">A salon is a place of beauty and transformation, where you can enhance your appearance and boost your confidence. Our salon offers a wide range of services, including hairstyling, hair coloring, nail care, and skincare treatments. Our skilled and creative professionals are dedicated to helping you look and feel your best.</p>
                    
					<Link to="/about" class="btn mt-lg-4 mt-3 read scroll" role="button">Learn More</Link>
                </div>
            </div>
        </div>
    </section>
//     {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
    <section class="services py-5" id="services">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <Link to="/"><img src="assets/images/services2.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4> Trim your Hair</h4>
							
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
					<Link to="/"><img src="assets/images/services1.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Trim your Beard</h4>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ab-info second mt-lg-4">
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/"><img src="assets/images/ser3.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>colouring</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/"><img src="assets/images/ser4.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Bathing</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/"><img src="assets/images/ser5.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>drying</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/"><img src="assets/images/ser6.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Creams</h4>
                           
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    {/* // <!-- /services -->
 
	// <!-- pricing -->  */}
<section class="pricing py-5">	
	<div class="container py-md-5">
		<h3 class="heading text-capitalize text-center mb-3 mb-sm-5"> Our Pricing</h3>
		<div class="row pricing-grids">
			<div class="col-lg-6  mb-lg-0 mb-5">
				<div class="padding">
					 <h3>PRICES FOR BEARD TRIMMING</h3>
					{/* <!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your BEARD style 1</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹150</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item my-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your Beard style 2</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹170</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your beard style 3</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹180</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your Beard style 4</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹190</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your Beard style 5</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹200</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Trim your Beard style 6</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹220</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends --> */}
				</div>
			</div>
			<div class="col-lg-6  mb-lg-0 mb-5">
				<div class="padding">
					<h3>PRICES FOR HAIR CUT </h3>
					{/* <!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 1</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹300</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item my-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 2</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹380</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 3</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹450</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 4</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹500</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 5</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹550</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Cut your hair style 6</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>₹650</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends --> */}
				</div>		
			</div>
					
		</div>		
	</div>		
</section>
// {/* <!-- //pricing -->
//   <!--/order-now--> */}
    <section class="order-sec py-5">
        <div class="container py-md-5">
            <div class="test-info text-center">
                <h3 class="tittle order">
                    <span>CALL US TO BOOK An APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
                <h4 class="tittle my-2">123456789  </h4>

                <div class="read-more mx-auto m-0 text-center">
					<Link to="/booking" class="read-more scroll btn">Click here</Link> 
				</div>
            </div>
        </div>
    </section>
  {/* <!--//order-now-->

//  <!--/testimonials--> */}
    <section class="testimonials py-5" id="testimonials">
        <div class="container py-md-5">
               <h3 class="heading text-center mb-3 mb-sm-5">Customer Reviews</h3>
            <div class="row mt-3">

                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>I cut my hair few days back! And I honestly wasnt satisfied with my cut it felt like its choppy rather than a fine clean cut.</p>
                        <h3 class="mt-md-4 mt-3"> Sudhir sakthi</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/test1.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                    <div class="test-info">

                        <p>Feel is the first hairdressers I’ve continued to return to knowing that I will always get a great haircut.</p>
                        <h3 class="mt-md-4 mt-3"> Sabari vas</h3>
                        <div class="test-img text-center mb-3">
                            <img src="assets/images/test2.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>I had my first appointment today after hearing great things about this place and the experience.</p>
                        <h3 class="mt-md-4 mt-3">Saathisu</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/test3.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="#">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>   
    </div>
        )
    }
}
export default Home