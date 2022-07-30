import React,{useEffect} from 'react'
import { gsap } from "gsap";
import {  ScrollTrigger } from "gsap/ScrollTrigger";

function Roadmap() {
	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger)
      // ScrollTrigger.create({
      //     trigger:'.partners-area',
      //     start:"bottom 80px",
      //     endTrigger:'.area-bg',
      //     end:'top bottom',
      //     pin:'.roadmap-area',
      //     pinSpacing:false,
      //     markers:true,
      // })
      ScrollTrigger.create({
          trigger:'.roadmap-head',
          start:"top 150px",
          endTrigger:'.area-bg',
          end:'top bottom',
          pin:'.roadmap-head',
          pinSpacing:false,
          onEnter:() =>{
              gsap.to('.roadmap-head .title', {
                  xPercent:-10,
                  fontSize:35
              })
          },
          // markers:true,
      })


      gsap.to(".timeline-img, .timeline-dots", {
          scrollTrigger: {
              trigger: ".timeline-img, .timeline-dots",
              scrub: true,
              start: "top 300px",
              endTrigger:'.area-bg',
              end: 'top bottom',
              onLeaveBack:() =>{
                  gsap.to('.roadmap-head .title', {
                      xPercent:0,
                      fontSize:60
                  })
              },
              // markers:true,
          },
          y: document.querySelector('.timeline-wrap').clientHeight - 410,
          duration:4,
          zIndex:-1
      })

      // gsap.to(".timeline-img, .timeline-dots", {
      //     scrollTrigger: {
      //         trigger: ".timeline-img, .timeline-dots",
      //         scrub: true,
      //         start: "top 300px",
      //         endTrigger:'.area-bg',
      //         end: 'top bottom',
      //         scroller:'.timeline',
              
      //     },
      //     y: document.querySelector('.timeline-wrap').clientHeight - 410,
      //     duration:4,
      //     zIndex:-1
      // })
	},[])
  return (
	<section id="roadmap" className="roadmap-area">
  
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-55 roadmap-head">
                <h2 className="title">DogeMeta <span>ROAD MAP section</span></h2>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="row justify-content-end">
              <div className="col-xl-8 col-lg-9 col-md-7">
                <div className="timeline-wrap">
                  
                  <div className="timeline-img"><img src="assets/img/images/timeline_img.png" alt="" /></div>
                  <div className="timeline-content">
                    <p>Our Goal is to create a Blockchain Game Ecosystem with Real-World utility and value. With this ambitious Project, we can reach the Moon! Our Team, Contributors and Investors have laid out Key Milestones that will put us on a Track to Success.</p>
                  </div>
                  <div className="timeline-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                    <div className="timeline-dots" />
                    <div className="timeline-list">
                      <h4 className="title">Phase 1</h4>
                      <ul>
                        <li>Website Launch</li>
                        <li>Social Media Launch</li>
                        <li>Audit Launch</li>
                        <li>NFT-Marketplace Development</li>
                        <li>Game-Trailer development</li>
                        <li>Whitepaper launch</li>
                        <li>Coinmarketcap Listing</li>
                        <li>Coingecko listing</li>
                        <li>Seed Sale</li>
                        <li>Private Sale 1</li>
                        <li>Public sale</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeline-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                   
                    <div className="timeline-list">
                      <h4 className="title">Phase 2</h4>
                      <ul>
                        <li>Game-Development</li>
                        <li>Game Trailer </li>
                        <li className="arrow">E-Commerce Launch</li>
                        <li>Several Updates</li>
                        <li className="arrow">Dubai Expo soon</li>
                        <li className="arrow">2D NFT collections</li>
                        <li>Charity Action </li>
                        <li className="arrow">Game Blog Website</li>
                        <li>Partnership Coop </li>
                        <li>CEX listing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeline-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                  
                    <div className="timeline-list">
                      <h4 className="title">Phase 3</h4>
                      <ul>
                        <li className="arrow">More partnership Cooperation’s</li>
                        <li className="arrow">Charity Action</li>
                        <li className="arrow">DogeMeta App launch</li>
                        <li className="arrow">Expand Marketing Strategy</li>
                        <li className="arrow">Create more 3D Game NFT’s</li>
                        <li className="arrow">Big game trailer</li>
                        <li className="arrow">Game Demo</li>
                        <li className="arrow">More CEX listing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeline-item wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                   
                    <div className="timeline-list">
                      <h4 className="title">Phase 4</h4>
                      <ul>
                        <li className="arrow">Beta Game Launch for PC</li>
                        <li className="arrow">Charity Projects</li>
                        <li className="arrow">More Listings</li>
                        <li className="arrow">More Cooperations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Roadmap