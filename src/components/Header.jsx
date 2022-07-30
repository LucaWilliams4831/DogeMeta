import React,{ useEffect } from 'react'
import $ from 'jquery';



function Header() {
	 useEffect(()=>{
    
      //SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});



}
      $(".menu-tigger").on("click", function () {
	$(".extra-info,.offcanvas-overly").addClass("active");
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".extra-info,.offcanvas-overly").removeClass("active");
});

  },[]);
  return (

	

	 <header>
   <div className="header-top-area">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 m-auto">
            <div className="header-social justify-content-center">
              <span>Follow us on :</span>
                <ul>
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
              
                  <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-medium"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  
                  <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-discord"></i>
                    </a>
                  </li> */}
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://t.me/dogemeta_one">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div id="sticky-header" className="menu-area transparent-header">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler"><img src="assets/img/icon/menu.png" alt="" /></div>
                <div className="menu-wrap">
                  <nav className="menu-nav show">
                    <div className="logo">
                      <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="active"><a href="/#banner">GAMING</a></li>
                        <li><a href="/#tokenomics">TOKENOMICS</a></li>
                        {/* <li><a href="/#whitepapers">WHITEPAPER</a></li> */}
                        <li><a href="https://dogemeta.one/cdn/whitepaper.pdf" target='_blank'>WHITEPAPER</a></li>
                        <li><a href="/#roadmap">ROADMAP</a></li>
                        <li><a href="/#contact">CONTACT</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul>
  
                        <li className="header-th"><a href="/#" className="menu-tigger"><img src="assets/img/icon/menu.png" alt="" /></a></li>
                        <li className="header-phone">
                          <div className="phone-icon"><i className="fa-brands fa-telegram" /></div>
                          {/* <div className="call"><span>Forums:</span><a href="/#" target="_blank" rel="noreferrer">Discord</a></div> */}
                          <div className="call"><span>Forums:</span><a href="https://t.me/dogemeta_one" target="_blank" rel="noreferrer">TELEGRAM</a></div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fa-solid fa-xmark" /></div>
                    <div className="nav-logo"><a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                    <div className="menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="header-phone">
                      <div className="phone-icon"><i className="fa-brands fa-discord" /></div>
                      <div className="call"><span>Forums:</span><a href="/#" rel="noreferrer" target="_blank">Discord</a></div>
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><i className="fa-brands fa-twitter" /></a></li>
                        <li><a href="/#"><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="/#"><i className="fa-brands fa-twitch" /></a></li>
                        <li><a href="/#"><i className="fa-brands fa-instagram" /></a></li>
                        <li><a href="/#"><i className="fa-brands fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>

        <div className="extra-info">
          <div className="close-icon menu-close">
            <button><i className="fa-regular fa-rectangle-xmark" /></button>
          </div>
          <div className="side-logo mb-30">
            <a href="/"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-30">
              <h4>Office Address</h4>
              <p>Ravi 18, 10138 <br /> Tallinn, Estonia</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Phone Number</h4>
              <p>+372 666 1901</p>
              {/* <p>+(090) 8667756543 85</p> */}
            </div>
            <div className="contact-list mb-30">
              <h4>Email Address</h4>
              <p>admin@dogemeta.one</p>
              {/* <p>example.mail@hum.com</p> */}
          </div>
          <p>http://www.dogemeta.one/</p>
          <p>http://www.dogeminer.one/</p>
          </div>
          <ul className="side-instagram">
            <li><a href="/#"><img src="assets/img/images/sd_insta01.jpg" alt="" /></a></li>
            <li><a href="/#"><img src="assets/img/images/sd_insta02.jpg" alt="" /></a></li>
            <li><a href="/#"><img src="assets/img/images/sd_insta03.jpg" alt="" /></a></li>
            <li><a href="/#"><img src="assets/img/images/sd_insta04.jpg" alt="" /></a></li>
            <li><a href="/#"><img src="assets/img/images/sd_insta05.jpg" alt="" /></a></li>
            <li><a href="/#"><img src="assets/img/images/sd_insta06.jpg" alt="" /></a></li>
          </ul>
          <div className="social-icon-right text-center mt-30">
            <a href="/#"><i className="fa-brands fa-facebook-f" /></a>
            <a href="/#"><i className="fa-brands fa-twitter" /></a>
            <a href="/#"><i className="fa-brands fa-twitch" /></a>
            <a href="/#"><i className="fa-brands fa-youtube" /></a>
          </div>
        </div>
        <div className="offcanvas-overly" />
        {/* offCanvas-menu-end */}
      </header>
  )
}

export default Header