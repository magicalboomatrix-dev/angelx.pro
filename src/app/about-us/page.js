'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Aboutpage = () => {
  return (
    <div>
      <div className="pagee">
      <main>
        <div className="page-wrappers" style={{paddingBottom: '100px', height:'auto'}}>
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
                    <b>About us</b>
                  </h1>
                
                    <section className="about-hero">
                        <h1>
                            Welcome to <span>AngelsX</span>
                        </h1>
                        <p style={{color: '#555'}}>
                            At AngelsX, we believe everyone deserves a
                            <b> simple, secure, and rewarding </b>way to experience the world of digital
                            assets. We created AngelsX to make USDT trading and exchange effortless for
                            everyone — from first-time investors to seasoned Digital experts.
                        </p>
                    </section>


                    <section className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                        To empower users with fast, transparent, and secure access to Digital
                        markets while delivering the best INR-to-USDT rates. Our goal is to help
                        every trader <b>exchange more, earn more, and grow more</b> with
                        confidence.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>What We Do</h2>
                        <ul>
                        <li>Buy &amp; Sell USDT instantly</li>
                        <li>Top-tier multi-layer security</li>
                        <li>Real-time pricing</li>
                        <li>Smooth, mobile-friendly trading experience</li>
                        </ul>
                    </section>
                    <section className="about-section">
                        <h2>Our Vision</h2>
                        <p>
                        To become India’s most trusted and user-centric Digital exchange platform,
                        connecting people with opportunity through innovation, education, and
                        transparency.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Why Traders Choose AngelsX</h2>
                        <div className="about-grid">
                        <div>✔ Instant registration &amp; KYC</div>
                        <div>✔ Real-time price tracking</div>
                        <div>✔ Binance liquidity integration</div>
                        <div>✔ Fast INR deposit &amp; withdrawal</div>
                        <div>✔ 24×7 customer support</div>
                        </div>
                    </section>
                    <section className="about-cta">
                        <h2>Start Your Trading Journey</h2>
                        <p>
                        At AngelsX, we’re not just another exchange —{" "}
                        <b>we’re your partner in financial growth.</b>
                        </p>
                        <a href="/exchange" data-discover="true">
                        <button className="cta-btn">Start Trading Now</button>
                        </a>
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
        .card {
          width: 380px;
          max-width: 100%;
          background: #fff;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }
        .title {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .subtitle {
          margin: 8px 0 5px;
          font-size: 15px;
          color: #6b7280;
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
      `}</style>
    </div>
  )
}

export default Aboutpage
