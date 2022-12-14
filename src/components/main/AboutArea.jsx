import React from 'react';


function AboutArea() {
  
  return (
	<section className="about-area about-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="about-title">
                <h2 className="title">COMING SOON</h2>
                <div className="about-content">
                  <h6 className="rotate-content">DogeMeta NFT-GAMING</h6>
                  {/* <h2 className="title">Join Our DISCORD To Get <span>Your WHITELIST Spot</span></h2> */}
                  <h2 className="title">JOIN OUR TELEGRAM To Get <span>Your WHITELIST Spot</span></h2>
                  <p>DogeMeta aims at promoting gaming and mining innovation by efficiently merging three
revolutionary technologies — gaming, mining and blockchain. As an all-encompassing
ecosystem for gamers, miners and traders, powered by Defi and NFT, DogeMeta’s objective is
simple: “to provide an avenue for gamers and miners that is not only entertaining but also allows
them to earn.”
                  <a href="/#" target="_blank" rel="noreferrer"> </a> 
                    Our game will be integrated into an NFT digital art marketplace via a
decentralized ecosystem built on the Ethereum second-layer solution. By bridging interesting
game concepts with the idea of NFTs, the DeogeMeta game will deliver a pc-gaming and mining
experience unlike anything before.</p>
                  
                    <h4 className="small-title">NFT Minting Price</h4>
                    <h6 className="price">1 <span> NFT PUBLIC PRICE  = 0.1 ETH </span> / MAX 9 NFT PER WALLET</h6>
                    <h6 className="price">1 <span> NFT WHITELIST PRICE = 0.07 ETH </span> / MAX 3 NFT PER WALLET</h6>
                </div>
                  
                <div className="about-btn-wrap">
                 
                  <a href="https://t.me/dogemeta_one" className="btn discord" target="_blank"><i className="fa-brands fa-discord" /> join telegram now</a>
                  <a href="https://dogeminer.one/" className="btn" target="_blank"> MINE DOGE COIN </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-img-wrap">
                <img src="assets/img/images/about_img.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="s-about-wrap">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="s-about-title">
                  <h2 className="title">UNLEASH THE WARRIOR <span>INSIDE</span></h2>
                </div>
                <div className="s-about-content">
                  <p>Gaming and Mining is our passion. That’s why we have developed DogeMeta, a doge mining,
battle royale, Play2Earn multiplayer game with NFT-Skins and weapons in an interactive
open-world map. Every character in the game has a unique skill set and hidden abilities
unlocked by completing specific challenges during gameplay. As a player you get the chance to
1v1, 5v5, join tournaments and create value by forging, lending and holding DogeMeta NFT’s.</p>
                  {/* <p>Our Vision is to develop modern High-End-Graphics games. Through this development, we aim to increase the value of our token ($KATA) DogeMeta for the community. The games will be integrated into an NFT Digital Art Marketplace via a decentralized Ecosystem. All In-game Items will be NFTs that are available in-game or options to sell in the open market which creates value for every penny spent. For More information please visit our <a href="/">Main Website</a> page and WHITEPAPER</p> */}
                  <p>Our Vision is to develop modern High-End-Graphics games and mining services. Through this
development, we aim to increase the value of our token ($DMT) DogeMeta for the community.
The games will be integrated into an NFT Digital Art Marketplace via a decentralized 
Ecosystem. All Mining & in-game items will be NFTs that are available in-game or options to sell
in the open market which creates value for every penny spent. For More information, please
check the WHITEPAPER</p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="s-about-img">
                  <img src="assets/img/images/about_img02.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutArea