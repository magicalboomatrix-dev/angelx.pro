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
                    <b>Privacy Policy</b>
                  </h1>
                
                  <section className="privacy-box">
                    <p className="last-updated">Last Updated: October 29, 2025</p>
                    <p>
                      This Privacy Policy describes Our policies and procedures on the collection,
                      use and disclosure of Your information when You use the Service and explains
                      Your privacy rights and how the law protects You. By using the Service, You
                      agree to the collection and use of information in accordance with this
                      Privacy Policy.
                    </p>
                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>
                      The words whose initial letters are capitalized have meanings defined under
                      the following conditions. These definitions have the same meaning whether in
                      singular or plural form.
                    </p>
                    <h3>Definitions</h3>
                    <p>
                      For the purposes of this Privacy Policy:
                      <br />
                      <strong>Account</strong> – A unique account created to access our Service.
                      <br />
                      <strong>Company</strong> (“We”, “Us”, or “Our”) refers to
                      https://www.angelx.exchange/.
                      <br />
                      <strong>Personal Data</strong> – Any information that identifies an
                      individual.
                      <br />
                      <strong>Device</strong> – Any device that can access the Service.
                      <br />
                      <strong>Service</strong> refers to the Website.
                      <br />
                      <strong>You</strong> means the individual or legal entity accessing the
                      Service.
                    </p>
                    <h2>Collecting and Using Your Personal Data</h2>
                    <h3>Types of Data Collected</h3>
                    <p>
                      <b>Personal Data</b>
                    </p>
                    <p>We may collect identifying information such as:</p>
                    <ul className="list">
                      <li>Email address</li>
                      <li>First and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, City, ZIP/Postal code</li>
                    </ul>
                    <p />
                    <h3>Usage Data</h3>
                    <p>
                      Usage Data may include Your IP address, browser details, pages visited, time
                      spent on the Service, and other analytics data.
                    </p>
                    <h2>Tracking Technologies &amp; Cookies</h2>
                    <p>
                      We use Cookies and tracking tools such as web beacons to improve the
                      Service. You may disable Cookies in your browser settings; however, some
                      features may not function properly.
                    </p>
                    <h2>Use of Your Personal Data</h2>
                    <p>We may use Your Personal Data for:</p>
                    <ul className="list">
                      <li>Providing and maintaining the Service</li>
                      <li>Managing Your account</li>
                      <li>Communicating updates and improvements</li>
                      <li>Security and fraud prevention</li>
                      <li>Business analysis and performance improvement</li>
                    </ul>
                    <p />
                    <h2>Disclosure of Your Personal Data</h2>
                    <p>
                      We may disclose data in case of business acquisition, legal obligations,
                      protection against fraud, or user security concerns.
                    </p>
                    <h2>Security of Your Personal Data</h2>
                    <p>
                      We strive to use commercially approved means to protect Your Personal Data,
                      though no system is 100% secure.
                    </p>
                    <h2>Children’s Privacy</h2>
                    <p>
                      We do not knowingly collect data from anyone under 13. If such information
                      is discovered, we take immediate action to remove it.
                    </p>
                    <h2>Links to Other Websites</h2>
                    <p>
                      External websites are not controlled by Us. We recommend reviewing their
                      privacy policies.
                    </p>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. Please check back
                      periodically. Updates become effective when posted.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, you can contact us:
                      <br />
                      📧 Email:{" "}
                      <a href="mailto:angelsxsocial@gmail.com">angelsxsocial@gmail.com</a>
                      <br />
                      🌐 Website:{" "}
                      <a href="https://www.angelx.exchange/" target="_blank" rel="noreferrer">
                        https://www.angelx.exchange/
                      </a>
                    </p>
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
    .privacy-box {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px;
    line-height: 1.6;
    margin-top: 10px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    padding: 25px;
}
.list {
    list-style-type: disc;
    margin-top: 5px;
    padding-left: 18px;
    color: #555;
}
.privacy-box h1 {
    color: rgb(46, 46, 46);
    font-size: 26px;
    font-weight: 700;
}
    .privacy-box p {
    color: #555;
    font-size: 14px;
    margin-top: 6px;
}
    .privacy-box h2 {
    color: rgb(51, 51, 51);
    font-size: 19px;
    font-weight: 600;
    margin-top: 20px;
}
    .privacy-box h3 {
    color: rgb(68, 68, 68);
    font-size: 16px;
    font-weight: 600;
    margin-top: 12px;
}
      `}</style>
    </div>
  )
}

export default Aboutpage
