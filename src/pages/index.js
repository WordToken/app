import * as React from "react"
import styled from 'styled-components'

import Layout from '../components/Layout'

import HeroImage from 'src/assets/alphabet.png'
import DiscordIcon from 'src/assets/discord-icon.png'
import TwitterIcon from 'src/assets/twitter-icon.png'



const HomePage = () => {
  return (
    <Layout>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">

              <div className="navbar-left mr-4">
                <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
                <a className="navbar-brand" href="#">
                  Word Token
                </a>
              </div>

              <section className="navbar-mobile">
                <nav className="nav nav-navbar nav-text-normal mr-auto">
                  <a className="nav-link" href="#"></a>
                  <a className="nav-link" href="#">Earn</a>
                  <a className="nav-link" href="#">Shop</a>
                  <a className="nav-link" href="#">Docs</a>
                  <a className="nav-link" href="#">Blog</a>
                </nav>

                <div className="d-flex align-items-center">
                  <a className="btn btn-sm btn-success" href="#">Connect Wallet</a>
                </div>
              </section>
            </div>
          </nav>


          <header className="header h-fullscreen" style={{backgroundImage: "linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%)"}}>
            <div className="container">
              <div className="row align-items-center h-100">

                <div className="col-lg-6">
                  <h1 className="fw-600">Play Word Games.<br />Earn <span className="text-info">$WORD </span> Tokens.</h1>
                  <p className="lead mt-5 mb-8">Solve complex word problems and earn $WORD tokens which can be redeemed for limited edition <a href="/spend">NFT's.</a> Are you up for the challenge?

                  </p>
                  <p className="gap-xy">
                    <a className="btn btn-round btn-primary mw-200" href="#">Play Now</a>
                    <a className="btn btn-round btn-outline-secondary mw-200" href="#">Learn more</a>
                  </p>
                </div>

                <div className="col-lg-5 ml-auto d-none d-lg-block">
                  <img src={HeroImage} alt="img" />
                </div>

              </div>
            </div>
        </header>
      <footer className="footer bg-gray py-9">
        <div className="container">
          <div className="row gap-y">

            <div className="col-md-6 col-xl-4">
              <div className="footer-logo">
                <a className="navbar-brand" href="#">
                  Word Token
                </a>
              </div>
              
              <p>Solve complex word problems and earn $WORD tokens which can be redeemed for limited edition NFT's.</p>
            </div>

            <div className="col-6 col-md-3 col-xl-2">
              <h6 className="mb-4 mt-1"><strong>Company</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Advertisement</a>
                <a className="nav-link" href="#">FAQ</a>
                <a className="nav-link" href="#">Contact</a>
              </div>
            </div>

            <div className="col-6 col-md-3 col-xl-2">
              <h6 className="mb-4 mt-1"><strong>Products</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Earn</a>
              </div>
            </div>
            

            <div className="col-6 col-md-3 col-xl-2">
              <h6 className="mb-4 mt-1"><strong>Governance</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">WORD Token</a>
                <a className="nav-link" href="#">Vote</a>
              </div>
            </div>

            <div className="col-6 col-md-6 col-xl-2 text-center">
              <p><a className="btn btn-block btn-round btn-primary" href="#">Play Now</a></p>
              <br />
              <SocialIconList>
                <div className="col-lg-6 twitter-icon"><a target="_blank" href="https://www.twitter.com/wordtoken"><img src={TwitterIcon} /></a></div>
                <div className="col-lg-6 discord-icon"><a _target="_blank"  href="https://discord.com/channels/799671631966109737/824406388188250143"><img src={DiscordIcon} /></a></div>
              </SocialIconList>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default HomePage


const SocialIconList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`