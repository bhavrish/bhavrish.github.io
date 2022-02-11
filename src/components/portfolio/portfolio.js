import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/moneymiles.jpg"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>MoneyMiles</h5>
                        <p>iOS Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/ccf2.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>CovidCrowdfunding</h5>
                        <p>Android Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/jetblue.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Don't Feel Blue, Jet Blue</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/chamber.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>MacaulayChamber</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/streetsync.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>StreetSync</h5>
                        <p>iOS Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/sportsconnect.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SportsConnect</h5>
                        <p>iOS Developoment</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/citydirect.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>CityDirect</h5>
                        <p>iOS Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/nsp.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>NoStressParking</h5>
                        <p>iOS Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-moneymiles.png" alt="" />
            <div className="description-box">
              <h4>MoneyMiles</h4>
              <p>MoneyMiles is an iOS app that uses machine learning to provide personalized workouts to runners. Recently launched prototype to the App Store.</p>
              <span className="categories"><i className="fa fa-tag" />iOS Development, ML</span>
            </div>
            <div className="link-box">
              <a href="https://apps.apple.com/us/app/moneymiles/id1461672116">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}

          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-ccf.png" alt="" />
            <div className="description-box">
              <h4>CovidCrowdfunding</h4>
              <p>CovidCrowdfunding is an Android app that allows users to support local businesses through donations.</p>
              <span className="categories"><i className="fa fa-tag" />Android Developoment, API Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/CovidCrowdfunding-Android">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}

          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-jetblue.png" alt="" />
            <div className="description-box">
              <h4>Don't Feel Blue, Jet Blue</h4>
              <p>Don't Feel Blue, Jet Blue is a Django web application that allows Jet Blue to obtain real-time insights of their services through sentiment analysis of Tweets.</p>
              <span className="categories"><i className="fa fa-tag" />Django, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/jetbluescrawler">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}

          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-chamber.png" alt="" />
            <div className="description-box">
              <h4>MacaulayChamber</h4>
              <p>MacaulayChamber is a Django web application for my university’s chamber music ensemble to showcase pictures as well as share club updates.</p>
              <span className="categories"><i className="fa fa-tag" />Django, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://macaulaychamber.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}

          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-streetsync.png" alt="" />
            <div className="description-box">
              <h4>StreetSync</h4>
              <p>StreetSync is an iOS app to help street performers share their location real-time to grow their audience as well as find optimal places to perform in New York City (based on population density at different times).</p>
              <span className="categories"><i className="fa fa-tag" />iOS Development, ML</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/StreetSync">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}

          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-sportsconnect.png" alt="" />
            <div className="description-box">
              <h4>SportsConnect</h4>
              <p>SportsConnect is an iOS app to help people find gym buddies and pickup sports games in their local area.</p>
              <span className="categories"><i className="fa fa-tag" />iOS Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/SportsConnect">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}

          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-citydirect.png" alt="" />
            <div className="description-box">
              <h4>CityDirect</h4>
              <p>CityDirect is an iOS crowdsourced app to alert students of broken escalators, bathrooms, and elevators on City College's campus.</p>
              <span className="categories"><i className="fa fa-tag" />iOS Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/citydirect">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}

          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-nsp.png" alt="" />
            <div className="description-box">
              <h4>NoStressParking</h4>
              <p>NoStressParking is an iOS app to help users find street-parking spaces near their current location.</p>
              <span className="categories"><i className="fa fa-tag" />iOS Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/bhavrish/NSP">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
        </div> {/* row End */}
      </section>
    );
  }
};