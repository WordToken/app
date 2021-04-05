import * as React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Button'

// import Web3 from 'web3'



const Header = () => {
    const [accounts, setAccounts] = React.useState([])
    const [isFetchingAccounts, setIsFetchingAccounts] = React.useState(false)
    const [selectedAccount, setSelectedAccount] = React.useState(null)

    const hasAccount = accounts && accounts.length > 0

    console.log(accounts, 'accounts')

    React.useEffect(() => {
        if (window && window.ethereum && hasAccount) {
            setSelectedAccount(window.ethereum.selectedAddress)
        }
    }, accounts[0])

    const handleConnect = async event => {
        event.preventDefault()
        if (window && typeof window.ethereum !== 'undefined') {
            try {
                setIsFetchingAccounts(true)
                const userAccounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
    
                setAccounts(userAccounts)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (<HeaderElement>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">

                        <div className="navbar-left mr-4">
                            <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
                            <a className="navbar-brand" href="/">
                                Word Token
                                </a>
                        </div>

                        <section className="navbar-mobile">
                            <nav className="nav nav-navbar nav-text-normal mr-auto">
                                {/* <a className="nav-link" href="#"></a> */}
                                <a className="nav-link" href="https://earn.wordtoken.com">Earn</a>
                                <a className="nav-link" href="https://shop.wordtoken.com">Shop</a>
                                <a className="nav-link" href="/docs">Docs</a>
                                <a className="nav-link" href="/blog">Blog</a>
                            </nav>

                            <div className="d-flex align-items-center">
                                {hasAccount ? `${accounts[0].substr(0,4)}...${accounts[0].substr(-4)}` : <Button value="Connect Wallet" handleClick={handleConnect} isDisabled={isFetchingAccounts} />}
                            </div>
                        </section>
                    </div>
                </nav>
            </HeaderElement>)
}

export default Header


const HeaderElement = styled.header`
    display: block;
`