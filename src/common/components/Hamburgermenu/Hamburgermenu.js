import React from 'react';
import styles from './Hamburgermenu.module.css';

const hamburgerMenu = (props) => {
    const activeStyle = props.active ? "Active" : "Off";
    const hamburgerStyles = props.anim ? `${styles.Hamburgerbutton} ${styles[props.anim]} ${styles[activeStyle]}` : `${styles.Hamburgerbutton} ${styles[activeStyle]}`;
    return (
        <div className={hamburgerStyles} onClick={props.click}>
            <div className={styles.Hamburgerbox}>
                <div className={styles.Hamburgerinner}></div>
            </div>
        </div>
    )
}

export default hamburgerMenu;