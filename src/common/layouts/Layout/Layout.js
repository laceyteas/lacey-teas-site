import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import Agecheck from '../../components/Agecheck/Agecheck';
import AlertTemplate from '../../components/AlertTemplate';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/reset.css';
import styles from './Layout.module.css';

const options = {
    position: positions.TOP_CENTER,
    timeout: 8000,
    offset: '30px',
    transition: transitions.SCALE
  }

const Layout = (props) => {

    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <Fragment>
                <Helmet>
                    <body className={styles.Body} />
                </Helmet>
                <Navbar />
                {props.children}
                <Footer />
                <Agecheck />
            </Fragment>
        </AlertProvider> 
    )
}

export default Layout;