import React from 'react'

function TeamArea() {
  return (
	<div className="area-bg">
        {/* team-area */}
        <section className="team-area pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <h2 className="title">OUR <span>TEAM</span> MEMBER</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item mb-30">
                  <div className="team-thumb mb-25">
                    <a href="/#" target="_blank"><img src="assets/img/team/team_img01.png" alt="" /></a>
                    <span>CEO &amp; FOUNDER</span>
                  </div>
                  <div className="team-content text-center">
                    <h2 className="title"><a href="/#" target="_blank">Murcus</a></h2>
                    
                  </div>
                  {/* <div className="social d-flex justify-content-center mt-3">
                    <a target="_blank" rel="noreferrer" href="/#"><i className="fa-brands fa-linkedin"></i></a>
                    <a target="_blank" rel="noreferrer" href="/#"><i className="fa-brands fa-instagram-square"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item mb-30">
                  <div className="team-thumb mb-25">
                    <a href="/#" target="_blank"><img src="assets/img/team/team_img02.png" alt="" /></a>
                    <span>CAO</span>
                  </div>
                  <div className="team-content text-center">
                    <h2 className="title"><a href="/#" target="_blank">Humming</a></h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item mb-30">
                  <div className="team-thumb mb-25">
                    <a href="/#" target="_blank"><img src="assets/img/team/team_img03.png" alt="" /></a>
                    <span>CTO</span>
                  </div>
                  <div className="team-content text-center">
                    <h2 className="title"><a href="/#" target="_blank">Timber</a></h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="team-item mb-30">
                  <div className="team-thumb mb-25">
                    <a href="/#" target="_blank"><img src="assets/img/team/team_img04.png" alt="true" /></a>
                    <span>MARKETING MANAGER</span>
                  </div>
                  <div className="team-content text-center">
                    <h2 className="title"><a href="/#" target="_blank">Yeazdi</a></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
       
      </div>
  )
}

export default TeamArea