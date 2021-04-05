import * as React from "react"
// import styled from 'styled-components'

import Layout from '../components/Layout'

import HeroImage from 'src/assets/alphabet.png'




const HomePage = () => {

  return (
    <Layout>
          <header className="header h-fullscreen" style={{backgroundImage: "linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)"}}>
            <div className="container">
              <div className="row align-items-center h-100">

                <div className="col-lg-6">
                  <h1 className="fw-600">Play Word Games.<br />Earn <span className="text-info">$WORD </span> Tokens.</h1>
                  <p className="lead mt-5 mb-8">Solve complex word problems and earn $WORD tokens which can be redeemed for limited edition <a href="https://shop.wordtoken.com">NFT's.</a> Are you up for the challenge?

                  </p>
                  <p className="gap-xy">
                    <a className="btn btn-round btn-primary mw-200" href="https://earn.wordtoken.com">Play Now</a>
                    <a className="btn btn-round btn-outline-secondary mw-200" href="/learn-more">Learn more</a>
                  </p>
                </div>

                <div className="col-lg-5 ml-auto d-none d-lg-block">
                  <img src={HeroImage} alt="img" />
                </div>

              </div>
            </div>
        </header>
    </Layout>
  )
}

export default HomePage


