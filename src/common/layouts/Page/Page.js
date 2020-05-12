import React from 'react';

import Inner from '../Inner/Inner';
import Pagebanner from './Pagebanner/Pagebanner';

import styles from './Page.module.css';

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