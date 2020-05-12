import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop'
import Mainnav from '../Mainnav/Mainnav';

import styles from './Slidermenu.module.css';

const slidermenu = (props) => (
    <Fragment>
        <div className={`${props.showMenu ? styles.Open : styles.Close} ${styles.Slidermenu}`} >
            <div className={styles.Mainnav}>
                <Mainnav includeHome />
            </div>
        </div>
        <Backdrop show={props.showMenu} close={props.closeBtn}/>
    </Fragment>
    
);

export default slidermenu;