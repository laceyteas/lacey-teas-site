import React from 'react';
import styles from './Reservationform.module.css';
import Section from '../../layouts/Section/Section';
import Form from '../Form/Form';
import Fieldset from '../Form/Fieldset/Fieldset'
import Input from '../Form/Input/Input'
import Textarea from '../Form/Textarea/Textarea'
import Select from '../Form/Select/Select'
import Submit from '../Form/Submit/Submit';
import Sectiontitle from '../../layouts/Section/Sectiontitle/Sectiontitle';

const Reservationform = (props) => (
    <Section>
        <div className={styles.Reservationform} >
            <Sectiontitle>Reservation Form</Sectiontitle>
            <Form name='contact'>
                <Fieldset legend="Full Legal Name">
                    <Input type="type" label="First Name" required/>
                    <Input type="type" label="Last Name" required />
                </Fieldset>
                <Fieldset legend="Contact Info">
                    <Input type="type" label="Email" required />
                    <Input type="type" label="Phone" required />
                </Fieldset>
                <Fieldset legend="Screening Info / References">
                    <Input type="type" label="Profession" required />
                    <Select label="What type of screening will you be providing?" required optionsArray={
                        [
                            {value: "Employment/Identity Verification"},
                            {value: "Provider References"},
                            {value: "Combination of both"}
                        ]
                    }/>
                    <Textarea label="Identity verification details" required/>
                </Fieldset>
                <Fieldset legend="Meeting Preferences">
                    <Textarea label="When and where would you like to meet?" required/>
                    <Select label="Desired duration of our time together?" required optionsArray={
                        [
                            {value: "60 minutes (limited avialability)"},
                            {value: "90 minutes"},
                            {value: "2 hours"},
                            {value: "3 hours"},
                            {value: "4 hours"},
                            {value: "6 hours"},
                            {value: "day date"},
                            {value: "overnight"},
                            {value: "staycation"},
                            {value: "travel/extended"},
                        ]
                    }/>
                    <Textarea label="What would you like me to know about you? What interests you about me?"/>
                </Fieldset>
                <Fieldset legend="Parting Thoughts">
                    <Select label="How did you find me?" required optionsArray={
                        [
                            {value: "Tryst"},
                            {value: "Slixa"},
                            {value: "Eros"},
                            {value: "Twitter"},
                            {value: "Instagram"},
                            {value: "Referral"},
                            {value: "The Other Board"},
                            {value: "other"}
                        ]
                    }/>
                    <Textarea label="Anything else you'd like to mention? ...I do take kindly to compliments!"/>
                </Fieldset>
                <Submit title="Submit" />

            </Form>
        </div>
    </Section>
);

export default Reservationform;