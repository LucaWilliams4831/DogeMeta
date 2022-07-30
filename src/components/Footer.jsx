import React from 'react'

function Footer() {
  return (
	<footer>
        <div className="footer-top-wrap">
          <div className="container footer-container">
            <div className="footer-menu-wrap">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="f-logo">
                    <a href="/#"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="footer-menu">
                    <nav>
                      <ul className="navigation">
                        <li><a href="/#" target="_blank">GAMING</a></li>
                        <li><a href="/#" target="_blank">TOKENOMICS</a></li>
                        {/* <li><a href="/#" target="_blank">WHITEPAPER</a></li> */}
                        <li><a href="https://dogemeta.one/cdn/whitepaper.pdf" target="_blank">WHITEPAPER</a></li>
                        <li><a href="/#" target="_blank">ROADMAP</a></li>
                        <li><a href="/#" target="_blank">CONTACT</a></li>
                        <li><a href="/#" target="_blank">FAQ</a></li>
                      </ul>
                      <div className="footer-search">
                        <form>
                          <input type="text" placeholder="Find Here Now" />
                          <button><i className="fa-solid fa-magnifying-glass" /></button>
                        </form>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-quick-link-wrap">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-8">
                  <div className="quick-link-list">
                    <ul>
                      <li><a href="/#" target="_blank">FAQ</a></li>
                      {/* <li><a href="/#" target="_blank">Help Center</a></li> */}
                      <li><a href="/#" target="_blank">Terms of Use</a></li>
                      <li><a href="/#" target="_blank">Privacy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4">
                  <div className="footer-social">
                    <ul>
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                    <i className="fab fa-tiktok"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-medium"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a target="_blank" rel="noreferrer" href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li> */}
                    {/* <li>
                      <a target="_blank" rel="noreferrer" href="/#">
                        <i className="fab fa-reddit"></i>
                      </a>
                    </li> */}
                  {/* <li>
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
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <p>Copyright © 2022 All Rights Reserved By <span>DogeMeta</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
