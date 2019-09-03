import React from 'react';
import './testimonials.scss';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonials = () => {
	const responsive = {
		0: { items: 1 },
		1024: { items: 2 },
	}

	return (
		<div>
			<div className="header-box">
				<h3>Testimonials</h3>
			</div>
			<AliceCarousel 
				responsive={responsive}
				mouseDragEnabled 
				dotsDisabled 
				buttonsDisabled
			>
				<div className="testimonial-item">
					<div className="testimonial-media">
						<img src="/img/testimonials/testimonial-1.jpg" alt="" />
						<div className="testimonial-content">
							<h4>John Doe</h4>
							<p>Web Development</p>
						</div>
						<ul className="testimonial-rating">
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star-half"></i></li>
						</ul>
					</div>
					<div className="testimonial-comment">
						<p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
					</div>
				</div>
				<div className="testimonial-item">
					<div className="testimonial-media">
						<img src="/img/testimonials/testimonial-2.jpg" alt="" />
						<div className="testimonial-content">
							<h4>John Doe</h4>
							<p>Web Development</p>
						</div>
						<ul className="testimonial-rating">
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
						</ul>
					</div>
					<div className="testimonial-comment">
						<p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
					</div>
				</div>
				<div className="testimonial-item">
					<div className="testimonial-media">
						<img src="/img/testimonials/testimonial-3.jpg" alt="" />
						<div className="testimonial-content">
							<h4>John Doe</h4>
							<p>Web Development</p>
						</div>
						<ul className="testimonial-rating">
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
							<li><i className="far fa-star"></i></li>
						</ul>
					</div>
					<div className="testimonial-comment">
						<p>Curabitur eleifend tempor gnceleris eget placeratvel phasellus eget sem just metup consequat gestas facilisis eleifend posure tempor metus sem just metup consequat gestas facilisis eleifend posures temporureture.</p>
					</div>
				</div>
			</AliceCarousel>
		</div>
	)
}

export default Testimonials;