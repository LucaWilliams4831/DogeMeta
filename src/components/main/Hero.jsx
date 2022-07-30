import React from 'react'
import Slider from 'react-slick';

function Hero() {
	const settings = {

	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	centerMode: true,
	centerPadding: '0',
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
	}
  return (

	      <section className="hero-area hero-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">our <span>super</span> hero</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Slider className="hero-active" {...settings}>
            <div className="hero-item">
              <img src="assets/img/images/hero_img01.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img02.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img03.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img04.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img05.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img05.png" alt="" />
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default Hero