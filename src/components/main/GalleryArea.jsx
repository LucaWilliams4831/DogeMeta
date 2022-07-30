import React,{ useEffect, useState} from 'react';
import $ from 'jquery';
import 'magnific-popup'
import Slider from "react-slick";

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><i className="fa-solid fa-angle-left"></i></button>
    );
}
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><i className="fa-solid fa-angle-right"></i></button>
    );
}


function GalleryArea() {
  // const settings1 ={
  // centerMode: true,
	// autoplay: false,
	// infinite: true,
	// speed: 500,
	// centerPadding: '0',
	// arrows: false,
	// slidesToShow: 1,
	// asNavFor: '.gallery-nav-active',
	// responsive: [
	// 	{
	// 		breakpoint: 1800,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 1500,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			centerPadding: '30px',
	// 			infinite: true,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 1200,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			centerPadding: '50px',
	// 			infinite: true,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			centerPadding: '0',
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 767,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			centerPadding: '0px',
	// 			arrows: false,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 575,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			centerPadding: '0px',
	// 			arrows: false,
	// 		}
	// 	},
	// ]
  // }
const settings = {
  slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.gallery-active',
	dots: false,
	arrows: true,
  prevArrow:<PrevArrow/>,
  nextArrow:<NextArrow/>,
	
}

const [nav1, setNav1] = useState(null)
const [nav2, setNav2] = useState(null)
let slider1,slider2;
 useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
	useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])
  return (
	<section className="gallery-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">CHECK OUR TRAILER ON KATANA</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <Slider className="gallery-active"  asNavFor={nav2}
                  ref={slider => (slider1 = slider)}
                  arrows={false}>
                <div className="gallery-item">
                  <img src="assets/img/gallery/trailer00.png" alt="" />
                  <a href="/https://www.youtube.com/watch?v=7nykO0FzsVQ" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/gallery_img.jpg" alt="" />
                  <a href="/https://www.youtube.com/watch?v=TKKWnzLZMKo" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/trailer01.png" alt="" />
                  <a href="/https://www.youtube.com/watch?v=XMTKGEVQJEc" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
          <div className="gallery-two-bottom">
            <div className="gallery-nav" />
            <Slider className="gallery-nav-active"  {...settings} asNavFor={nav1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  ref={slider => (slider2 = slider)} slidesToShow={1} arrows={true} >
              <h4>DOGEMINER IS LIVE</h4>
              <h4>The Shadow</h4>
              <h4>Fata Morgana</h4>
              <h4>Vampire Blood</h4>
              <h4>Command 69</h4>
            </Slider>
          </div>
        </div>
      </section>
  )
}

export default GalleryArea