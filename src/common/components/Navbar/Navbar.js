import React, { Fragment, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Mainnav from '../Mainnav/Mainnav';
import Slidermenu from '../Slidermenu/Slidermenu';
import Hamburgermenu from '../Hamburgermenu/Hamburgermenu'

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMenu = () => setMenuToggle( menuToggle => !menuToggle )

    return (
        <Fragment>
            <div className={styles.Navbar} >
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <div className={styles.Mainnav}>
                    <Mainnav />
                </div>
                <div className={styles.Menubtn}>
                    <Hamburgermenu click={toggleMenu} active={menuToggle} anim="Squeeze" />
                </div>
            </div>
            <Slidermenu showMenu={menuToggle} closeBtn={toggleMenu} />  
        </Fragment>
    );
}

export default Navbar;