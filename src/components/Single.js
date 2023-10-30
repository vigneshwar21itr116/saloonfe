import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Single extends Component{
    render(){
        return(
            <div>
<section class="inner-page-banner" id="home">
</section>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Single page</li>
	</ol>
</div>
    <section class="banner-bottom py-5">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
            <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                <div class="content-sing-w3ls px-lg-5">
                   
                    <h4>About Saloon & Our Team</h4>
                    <p>Rolex Salon is a premier hair and beauty destination in Anytown. Our experienced and skilled stylists are dedicated to making you look and feel your best. We offer a wide range of services in a relaxed and comfortable atmosphere. Whether you're looking for a simple haircut or a complete makeover, our team is here to serve you.</p>
                    <p class="mt-3">Our salon boasts a team of highly skilled and experienced beauty professionals. Our stylists are trained in the latest techniques and trends in hair cutting, coloring, and styling. Our makeup artists have a keen eye for detail and can create the perfect look for any occasion. Our nail technicians are experts in manicures and pedicures, ensuring your hands and feet look and feel their best.</p>
                    <ul class="w3ls_social_list list-unstyled mt-4">
                        <li class="lead">
                            Catch On Social :
                        </li>
                        <li>
                            <a href="#" class="w3pvt_facebook">
                                <span class="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a href="#" class="w3pvt_twitter">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="w3pvt_dribble">
                                <span class="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="w3pvt_google">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </li>
                    </ul>

             </div><br></br>
                
                <div class="comment-sec-w3ls">
                    <h4 class="leave-w3ls mb-5">Services Offered:</h4>
                    <ul class="list-unstyled">
                        <li class="media">
                            

                            <div class="media-body">
                                <h5 class="mt-0 mb-1">Hair Care:</h5>
                                <p class="mt-3">From precision haircuts to creative styling, we offer a full spectrum of hair services. Whether you want a classic look or a bold change</p>
                            </div>
                        </li>
                        <li class="media my-5 ml-3">
                            
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">Beard trimming</h5>
                                <p class="mt-3">Beard trimming services at a salon or barbershop offer men the opportunity to maintain and style their facial hair with expertise and precision.</p>
                            </div>
                        </li>
                        <li class="media ml-5">
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">Shaving servives</h5>
                                <p class="mt-3">Shaving services in a salon or barbershop offer a luxurious and precise way to achieve a smooth and clean-shaven look.</p>
                            </div>
                        </li>
                    </ul>
                </div>
               

            </div>


        </div>
    </section>
    </div>
        )
    }
}
export default Single