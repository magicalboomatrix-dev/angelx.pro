'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Aboutpage = () => {
  return (
    <div>
      <div className="pagee">
      <main>
        <div className="page-wrappers" style={{paddingBottom: '100px',height:'auto'}}>
          <div className="page-wrapperss page-wrapper-ex page-wrapper-login">
            <div className="back-btn">
              <Link href="/">
                <img src="/images/back-btn.png" />
              </Link>
            </div>
            <section className="section-1" style={{padding:"0px"}}>
              <br/>

              <div className="form-bx">
                                
                  <>
                  <h1 className="title" style={{marginBottom:'15px',fontWeight:500,fontSize:'22px'}}>
                    <b>Contact us</b>
                  </h1>
                
                    <section className="about-hero">
                        <h1>
                            Contact <span>AngelX</span>
                        </h1>
                        <p style={{color: '#555'}}>
                            We’re here to help you every step of the way. Whether you have a question about AngelX USDT Sell, need assistance with your account, or want to learn more about our platform — our support team is ready 24/7.
                        </p>
                    </section>

                    <section className="contact-section">
                    <h2>📬 Get in Touch</h2>
                    <div className="contact-grid">
                      <div className="contact-card">
                        <h3>📧 Customer Support Email</h3>
                        <p>support@angelx.pro</p>
                      </div>
                      <div className="contact-card">
                        <h3>💬 Live Chat Support</h3>
                        <p>Available 24/7 inside the AngelX app and website.</p>
                      </div>
                      <div className="contact-card">
                        <h3>🌐 Official Website</h3>
                        <a href="https://www.angelx.pro/" target="_blank" rel="noreferrer">
                          https://www.angelx.pro/
                        </a>
                      </div>
                    </div>
                  </section>

                    <section className="about-cta">
                        <h2>Need Quick Help?</h2>
                        <p>Start a live chat now and get instant assistance from our expert team.</p>
                        <button className="contact-btn">Chat Now</button>
                    </section>
                   


                </>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>

    <style jsx>{`
        .page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: #f6f7fb;
          padding: 16px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }
          
          .page-wrapperss.page-wrapper-loginacc section.section-1 p ,
          .page-wrapperss.page-wrapper-loginacc section.section-1 li {
          color: #555
          }
        
        .form-bx{
    max-width: 92%;
    margin: auto;
}
    .about-hero {
    background: linear-gradient(90deg, #fff6fd, #fff);
    border-radius: 15px;
    box-shadow: 0 2px 6px #0000000d;
    margin: 20px 0;
    padding: 25px;
    text-align: center;
}
    .about-hero h1 {
    color: #2e2e2e;
    font-size: 22px;
    font-weight: 700;
}
    .about-hero h1 span {
    color: #ffc107;
}
    .about-hero p {
    color: #555;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 10px;
    margin-bottom:0
}
    .about-section {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 5px;
    margin-bottom: 15px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    padding: 20px;
}
    .about-section h2 {
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
}
    .about-section ul {
    padding-left: 15px;
}
    .about-section li, .about-section p {
    color: rgb(102, 102, 102);
    font-size: 14px;
    line-height: 1.6;
}
    .about-cta {
    color: rgb(255, 255, 255);
    margin-top: 25px;
    text-align: center;
    background: rgb(20, 24, 42);
    border-radius: 15px;
    padding: 30px 20px;
}
    .about-cta h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
}
    .about-cta p {
    color: rgb(209, 209, 209);
    font-size: 15px;
}
    .cta-btn {
    color: rgb(20, 24, 42);
    cursor: pointer;
    font-weight: 600;
    margin-top: 15px;
    background: rgb(255, 255, 255);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 10px;
    padding: 12px 25px;
    transition: 0.3s;
}
    .contact-section {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    padding: 20px;
}
    .contact-section h2 {
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
}
    .contact-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
}
    .contact-card {
    background: rgb(250, 250, 250);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    border-radius: 12px;
    padding: 15px;
}
    .contact-card h3 {
    color: rgb(34, 34, 34);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}
    .contact-card a, .contact-card p {
    color: rgb(102, 102, 102);
    font-size: 14px;
    line-height: 1.5;
}
    .contact-btn {
    background: #fff;
    border: none;
    border-radius: 10px;
    color: #14182a;
    cursor: pointer;
    font-weight: 600;
    margin-top: 15px;
    padding: 12px 25px;
    transition: .3s ease;
}
      `}</style>
    </div>
  )
}

export default Aboutpage
