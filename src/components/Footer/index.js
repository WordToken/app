import React from 'react'
import styled from 'styled-components'

import DiscordIcon from 'src/assets/discord-icon.png'
import TwitterIcon from 'src/assets/twitter-icon.png'


const Footer = () => {
    return (<FooterElement className="footer bg-gray py-9">
                <div className="container">
                    <div className="row gap-y">
                        <div className="col-md-6 col-xl-4">
                            <div className="footer-logo">
                                <a className="navbar-brand" href="/">Word Token</a>
                            </div>

                            <p>Solve complex word problems and earn $WORD tokens which can be redeemed for limited edition NFT's.</p>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2">
                            <h6 className="mb-4 mt-1"><strong>Company</strong></h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="/about">About</a>
                                <a className="nav-link" href="/advertisement">Advertisement</a>
                                <a className="nav-link" href="/faq">FAQ</a>
                                <a className="nav-link" href="/contact">Contact</a>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-xl-2">
                            <h6 className="mb-4 mt-1"><strong>Products</strong></h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="https://earn.wordtoken.com">Earn</a>
                                <a className="nav-link" href="/docs/api">API</a>
                            </div>
                        </div>


                        <div className="col-6 col-md-3 col-xl-2">
                            <h6 className="mb-4 mt-1"><strong>Governance</strong></h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="/docs/governance/#erc20">WORD | ERC-20</a>
                                <a className="nav-link" href="/docs/governance/#voting">Voting Protocol</a>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-xl-2 text-center">
                            <p><a className="btn btn-block btn-round btn-primary" href="https://earn.wordtoken.com">Play Now</a></p>
                            <br />
                            <SocialIconList>
                                <div className="col-lg-6 twitter-icon"><a target="_blank" rel="noreferrer" href="https://www.twitter.com/wordtoken"><img src={TwitterIcon} alt="twitter-icon" /></a></div>
                                <div className="col-lg-6 discord-icon"><a _target="_blank" rel="noreferrer" href="https://discord.com/channels/799671631966109737/824406388188250143"><img src={DiscordIcon} alt="discord-icon" /></a></div>
                            </SocialIconList>
                        </div>
                    </div>
                </div>
            </FooterElement>)
}

export default Footer


const FooterElement = styled.footer``


const SocialIconList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
