import React from 'react';

import Inner from '../Inner/Inner';
import Sectiontitle from './Sectiontitle/Sectiontitle'

//import styles from './Section.module.css';

const Section = (props) => (
    <section>
        <Inner fullwidth={props.fullwidth} innerStyle={props.innerStyle}>
            { props.title ? <Sectiontitle>{props.title}</Sectiontitle> : null }
            { props.htmlcontent ? <div dangerouslySetInnerHTML={{__html: props.htmlcontent}}/> : null }
            { props.children }
        </Inner>
    </section>
);

export default Section;