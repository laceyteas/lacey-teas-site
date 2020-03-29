import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'gatsby';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import logoImg from '../../../assets/Flora-Sparks---logo.png';

const Logo = () => {
    const { title } = useSiteMetadata()
    
    return (
        <Link to="/" className={styles.Link} >
            <img src={logoImg} alt={title} className={styles.Img}></img>
        </Link>
    )
};

export default Logo;