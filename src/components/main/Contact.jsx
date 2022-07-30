import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact-area pt-115 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb-60">
            <h2 className="title">CONTACT DogeMeta</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="contact-content">
            <h4 className="title">Any <span>questions?</span></h4>
            <p>Reach out to us and we will get back to you shortly.</p>
            <ul className="contact-info-list">
              <li>
                <div className="icon"><i className="fa-solid fa-paper-plane" /></div>
                <div className="content">
                  <p><a href="https://t.me/dogemeta_one" target="_blank">Join us on Telegram &gt;</a></p>
                </div>
              </li>
              <li>
                <div className="icon"><i className="fa-solid fa-envelope-open-text" /></div>
                <div className="content">
                  <p><a href="/#" target="_blank">support@dogemeta.one</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="contact-form">
            <form >
              <div className="form-grp">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-grp">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-grp">
                <textarea name="message" placeholder="Your Message" defaultValue={""} />
              </div>
              <button type="submit" className="btn">submit now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact