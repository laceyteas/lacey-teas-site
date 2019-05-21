import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {

    let buttonstyle

    switch(props.type) {
        case "yes":
            buttonstyle = `${styles.Button} ${styles.Yes}`; 
            break;
        case "no":
            buttonstyle = `${styles.Button} ${styles.No}`; 
            break;
        default:
            buttonstyle = styles.Button
    }

    return (
        <button className={buttonstyle} onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;