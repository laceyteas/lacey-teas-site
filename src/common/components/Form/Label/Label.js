import React from 'react';
import styles from './Label.module.css';

const Required = () => (
    <span className={styles.Required}>*</span>
)

const Label = ({forRef, label, required}) => (
    <label className={styles.Label} for={forRef}>{label}{required ? <Required/> : null}</label>
);

export default Label;