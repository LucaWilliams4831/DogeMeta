import React from 'react'
import Slider from "react-slick";


function Partners() {
	const settings = {
		dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
	}
  return (
	 <section className="partners-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">PARTNERS &amp; PACKERS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider className="partners-active" {...settings}>
                <div className="partner-list">
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_01.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_02.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_03.png" alt="" /></a>
                  </div>
                </div>
                <div className="partner-list">
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_04.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_05.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_06.png" alt="" /></a>
                  </div>
                </div>
                <div className="partner-list">
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_07.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_08.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_09.png" alt="" /></a>
                  </div>
                </div>
                <div className="partner-list">
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_10.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_11.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_12.png" alt="" /></a>
                  </div>
                </div>
                <div className="partner-list">
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_13.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_14.png" alt="" /></a>
                  </div>
                  <div className="partner-item">
                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_15.png" alt="" /></a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Partners