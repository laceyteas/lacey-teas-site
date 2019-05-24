import React from 'react';
import styles from './Footer.module.css';
import useSiteMetadata from '../../../hooks/useSiteMetadata'
import { Link } from 'gatsby';
import { FiInstagram, FiTwitter } from 'react-icons/fi';

const footer = (props) => {

    const { title, twitter, instagram } = useSiteMetadata();

    return (
        <div className={styles.Footer} >
            <div className={styles.Copyright}>
                {title} &copy; {new Date().getFullYear() }
            </div>
            <div className={styles.Socialnav}>
                <nav>
                    <ul>
                        { twitter ? <li><a href={twitter}><FiTwitter /> <span>laceyteas</span></a> </li> : null }
                        { instagram ? <li><a href={instagram}><FiInstagram/> <span>xolaceyteas</span></a> </li> : null }
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

export default footer;