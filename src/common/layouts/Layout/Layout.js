import React, { Fragment } from 'react';
import '../../styles/reset.css';
import '../../styles/fonts.css';
import styles from './Layout.module.css';
import Helmet from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Agecheck from '../../components/Agecheck/Agecheck';


const Layout = (props) => {

    return (
        <Fragment>
            <Helmet>
                <body className={styles.Body} />
            </Helmet>
            <Navbar />
            {props.children}
            <Footer />
            <Agecheck />
        </Fragment>
    )
}

export default Layout;