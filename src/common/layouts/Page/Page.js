import React from 'react';
import styles from './Page.module.css';
import Pagebanner from './Pagebanner/Pagebanner';
import Inner from '../Inner/Inner';

const Page = (props) => (
    <article className={styles.Page} >
        <Pagebanner title={props.title} img={props.img} />
        <Inner>
            { props.htmlcontent ? <div className={styles.Content} dangerouslySetInnerHTML={{__html: props.htmlcontent}}/> : null }
            { props.children }
        </Inner>
    </article>
);

export default Page;