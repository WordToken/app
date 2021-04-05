import * as React from 'react'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { Helmet } from 'react-helmet'

import '../../../node_modules/bootstrap/scss/bootstrap.scss'
import './page.scss'
import './styles.scss'

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout