import React from 'react';
// import './FaqSection.css';

class FaqSection extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            data: [
                { id: 1, title: "What is DogeMeta?", decscription: "A Deflationary Token on Ethereum with a PC-Game and Mining Interface and an Innovative NFT Ecosystem, with 30% Ethereum Reward to Holders in Doge."},
                //{ id: 2, title: "When do we get our ETH allowances?", decscription: "The Ethereum rewards are automatically credited to the holder’s wallet after about 12 hours."},
                { id: 3, title: "Who are the Team Members?", decscription: "A Group from Space that has come together - 15 Team Members from all over Europe, that has already accompanied many Projects together and is well-rehearsed."},
                { id: 4, title: "There is no Sell or Buy Limit", decscription: "Yes you can buy, hold and stake your $DMT soon. We are working on that Staking Mechanism and will soon provide Details"},
                //{ id: 5, title: "How much should the slippage fee be when buying/selling?", decscription: "The slippage fee is 10%. If this one doesn’t work out, feel free to try 11-15% slippage."},
                { id: 6, title: "Can we start mining Doge Coin now?", decscription: `Yes. You can start mining DogeCoin on our DogeMiner platform.${<a href="https://dogeminer.one/">Click here to begin</a>}`},
                { id: 7, title: "Where can we see the whitepaper?", decscription: "/#"}
            ]
        };
    }


    render() {
        return (
            <div id= "faq" className='py-5'>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-8 m-auto'>
                        <div className="section-title text-center py-5">
                            <h2 className="title text-capitalize">Frequently Asked Questions</h2>
                        </div>
                        <p className=' text-center pb-5 mt-3'>Below we have provided our summarized frequently asked Questions. If you have additional
Questions, Concerns, improvement Proposals or you would like to Cooperate with us, please get in
touch with us by using the Contact Form below</p>
                    </div>
                </div>
            </div>
            <div className='faq-area py-5'>
                <div className="shape shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none">
                        <path d="M350,10L340,0h20L350,10z"></path>
                    </svg> 
                </div>
               <div className='container'>
                <div className="accordion" id="accordionExample">
                        {
                            this.state.data.map(val => {
                                return <div className="accordion-item" key={val.id}>
                                <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne">
                                    <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target={ '#collapse' + val.id} aria-expanded="true" aria-controls={'#collapse' + val.id}>
                                        { val.title }
                                    </button>
                                    {
                                        this.state.toggleAccordion ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                        </svg>
                                        : 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    }
                                </h2>
                                <div id={ 'collapse' + val.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        { val.decscription }
                                    </div>
                                </div>
                            </div>
                            })
                        }

                        {/* <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                When do we get our ETH allowances?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The Ethereum rewards are automatically credited to the holder’s wallet after about 12 hours.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                Who are the team members?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                A group from the Space who have come together – 15 team members from Europe, who have already accompanied many projects and is well-rehearsed.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                Is there a buy and sell limit?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                After the launch: No, there is no sell or buy limit.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                How much should the slippage fee be when buying/selling?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The slippage fee is 10%. If this one doesn’t work out, feel free to try 11-15% slippage.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                Can we do Katana Staking?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Currently we do not have this planned for the token, but we will have a NFT Staking.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex justify-content-between align-items-center" id="headingOne" onClick={this.handleToggle}>
                                <button className="accordion-button text-white font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                Where can we see the whitepaper?
                                </button>
                                {
                                    this.state.toggleAccordion ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#ffffff" className="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                }
                            </h2>
                            <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                www.phobos.com/whitepaper
                                </div>
                            </div>
                        </div> */}
                    </div>
               </div>
               <div className='shape shape-bottom' data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none">
                        <path d="M350,10L340,0h20L350,10z"></path>
                    </svg> 
                </div>
            </div>
            </div>
        )
    }
}

export default FaqSection
