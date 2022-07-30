import React,{ useState } from 'react'



function PurchaseArea() {
    const [copySucessUniswap,setcopySucessUniswap]= useState()
   const [copySuccessPancake,setcopySuccessPancake] = useState()
   const copyToClipboard = (token, text)=>{
        if(navigator.clipboard !== 'undefined'){
            navigator.clipboard.writeText(token)
            .then(() =>{
                if( text === 'uniswap' ){
                    setcopySucessUniswap('Copied!');
                }else{
                    setcopySuccessPancake('Copied!');
                }
            })
            .catch((error) => {
                console.error(error)
            })
        }
    }
  return (
	<section className="purchase-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                {/* <h2 className="title">YOU CAN <span>PURCHASE</span> now</h2> */}
                <h2 className="title">BUY DMT TOKEN NOW - <span>100%</span> REFERRALBONUS</h2>
                <h5 className="sub-title">BUY NOW AT PRESALE PRICE AND SELL HIGHER - MAKE PROFIT</h5>
                {/* <h5 className="sub-title">NOW ON PANCAKE SWAP AND UNISWAP</h5> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <div className="purchase-title-paragraph text-center">
                <p>The best way to purchase the Katana Token. Please make sure, you Copy and Paste the correct Contract, below when adding the Token to your ETH Wallet or BSC Wallet. When you purchasing Katana on Uniswap or Pancake Swap.</p>
              </div> */}
              <div className="purchase-item active">
                <div className="purchase-btn">
                  {/* <a href="/#" target="_blank" className="btn">Uniswap</a> */}
                  <a href="/#" target="_blank" className="btn">BUY NOW - 30% BONUS</a>
                </div>
                {/* <p>Don't send it to this address. Just copy paste it and Insert into pancakeswap or uniswap. Otherwise you will loose your tokens.</p> */}
                {/* <h4 className="title">dfghjklcvbnmghjknhjkl45678987654<i onClick={()=>copyToClipboard("dfghjklcvbnmghjknhjkl45678987654","uniswap")} className="fa-solid fa-copy"></i> <span>{copySucessUniswap}</span> </h4> */}
              </div>
              <div className="purchase-item">
                <div className="purchase-btn">
                  <a href="/#" target="_blank" className="btn">REFER OTHERS - 100% REFERRAL BONUS</a>
                  {/* <a href="/#" target="_blank" className="btn">Pancake Swap</a> */}
                </div>
                {/* <h4 className="title">asdfghjk23456789sdfghjk345678dfg<i onClick={()=>copyToClipboard("asdfghjk23456789sdfghjk345678dfg","pancake")} className="fa-solid fa-copy"></i> <span>{copySuccessPancake}</span> </h4> */}
              </div>
              {/* <div className="dextools-btn text-center">
                <a href="/#" target="_blank" className="btn">dextools</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="purchase-img-shape"><img src="assets/img/images/purchase_shape01.png" className="wow fadeInLeftBig" data-wow-delay=".3s" data-wow-duration="2s" alt="" /></div>
        <div className="purchase-img-shape right-shape"><img src="assets/img/images/purchase_shape02.png" className="wow fadeInRightBig" data-wow-delay=".3s" data-wow-duration="2s" alt="" /></div>
      </section>
  )
}

export default PurchaseArea