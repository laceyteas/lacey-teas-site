import React from 'react';
import styles from './Inner.module.css';

const Inner = (props) => {

    const style = props.fullwidth ? styles.Fullwidth : styles.Inner

    return (
        <div className={style} style={props.innerStyle}>
        {props.children}
    </div>
    )
}

export default Inner;