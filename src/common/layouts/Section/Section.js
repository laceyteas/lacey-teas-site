import React from 'react';
import styles from './Section.module.css';
import Sectiontitle from './Sectiontitle/Sectiontitle'
import Inner from '../Inner/Inner';

const Section = (props) => (
    <section className={styles.Section} >
        <Inner>
            { props.title ? <Sectiontitle>{props.title}</Sectiontitle> : null }
            { props.htmlcontent ? <div className={styles.Content} dangerouslySetInnerHTML={{__html: props.htmlcontent}}/> : null }
            { props.children }
        </Inner>
    </section>
);

export default Section;