import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'gatsby';
import React from 'react';

import useSiteMetadata from '../../../hooks/useSiteMetadata'

import styles from './Footer.module.css';

const Footer = (props) => {

    const { title, twitter, instagram } = useSiteMetadata();

    return (
        <div className={styles.Footer} >
            <div className={styles.Copyright}>
                {title} &copy;&nbsp;{new Date().getFullYear() }
            </div>
            <div className={styles.Socialnav}>
                <nav>
                    <ul>
                        { twitter ? <li><a href={twitter}><FiTwitter /><span>florasparksxo</span></a> </li> : null }
                        { instagram ? <li><a href={instagram}><FiInstagram/><span>florasparksxo</span></a> </li> : null }
                    </ul>
                </nav>
            </div>
            <div className={styles.Footernav}>
                <nav>
                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}

export default Footer;