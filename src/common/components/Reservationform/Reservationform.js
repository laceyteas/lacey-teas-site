import React, {useState} from 'react';
import styles from './Reservationform.module.css';
import Section from '../../layouts/Section/Section';
import Form from '../Form/Form';
import Fieldset from '../Form/Fieldset/Fieldset'
import Input from '../Form/Input/Input'
import Textarea from '../Form/Textarea/Textarea'
import Select from '../Form/Select/Select'
import Submit from '../Form/Submit/Submit';
import Sectiontitle from '../../layouts/Section/Sectiontitle/Sectiontitle';

const Reservationform = (props) => {

    const formFieldsDefault = {
        firstName: {
            name:'firstName',
            label: "First Name",
            value: '',
            required: true
        },
        lastName: {
            name: 'lastName',
            label: "Last Name",
            value: '',
            required: true
        },
        email: {
            name:'email',
            label: "Email",
            value: '',
            required: true
        },
        phone: {
            name: 'phone',
            label: "Phone",
            value: '',
            required: true
        },
        screeningProfession: {
            name: 'screeningProfession',
            label: "Profession",
            value: '',
            required: true
        },
        screeningType: {
            name: 'screeningType',
            label: "What type of screening will you be providing?",
            options: [
                {value: "Employment/Identity Verification"},
                {value: "Provider References"},
                {value: "Combination of both"}
            ],
            value: '',
            required: true
        },
        screeningVerification: {
            name: 'screeningVerification',
            label: "Identity verification details",
            value: '',
            required: true
        },
        meetingLocation: {
            name: 'meetingLocation',
            label: "When and where would you like to meet?",
            value: '',
            required: true
        },
        meetingDuration: {
            name: 'meetingDuration',
            label: "Desired duration of our time together?",
            options: [
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
            ],
            value: '',
            required: true
        },
        interests: { 
            name: 'interests',
            label: "What would you like me to know about you? What interests you about me?",
            value: '',
            required: false,
        },
        howYouFoundMe: {
            name: 'howYouFoundMe',
            label: "How did you find me?",
            options: [
                {value: "Tryst"},
                {value: "Slixa"},
                {value: "Eros"},
                {value: "Twitter"},
                {value: "Instagram"},
                {value: "Referral"},
                {value: "The Other Board"},
                {value: "other"}
            ],
            value: '',
            required: true
        },
        extras: {
            name: 'extras',
            label: "Anything else you'd like to mention? ...I do take kindly to compliments!",
            value: '',
            required: false,
        },
    }
    
    const [formFields, setFormFields] = useState(formFieldsDefault);

    const simplifiedFormResult = Object.keys(formFields).reduce((acc,field, i) => {
        if (i === 1) {
            acc = {[acc]:formFields[acc].value}
        } else acc = {...acc, [field]:formFields[field].value}
        return acc
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const submitHandler = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...simplifiedFormResult })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault()
    }

    const changeHandler = e => {    
        setFormFields({...formFields, [e.target.name]: {...formFields[e.target.name], value: e.target.value} })
    }

    const fieldMaker = (Field, props) => {
        const {name,label,value,required, options} = props
        return Field ? (
            <Field
                label={label}
                name={name}
                value={value}
                required={required}
                change={changeHandler}
                optionsArray={options}
            />
        ) : null
    }

    return (
        <Section>
            <div className={styles.Reservationform} >
                <Sectiontitle>Reservation Form</Sectiontitle>
                <Form name='contact' action='/thanks' submit={submitHandler}>
                    <Fieldset legend="Full Legal Name" >
                        {fieldMaker(Input, {...formFields.firstName})}
                        {fieldMaker(Input, {...formFields.lastName})}
                    </Fieldset>
                    <Fieldset legend="Contact Info">
                        {fieldMaker(Input, {...formFields.email})}
                        {fieldMaker(Input, {...formFields.phone})}
                    </Fieldset>
                    <Fieldset legend="Screening Info / References">
                        {fieldMaker(Input, {...formFields.screeningProfession})}
                        {fieldMaker(Select, {...formFields.screeningType})}
                        {fieldMaker(Textarea, {...formFields.screeningVerification})}
                    </Fieldset>
                    <Fieldset legend="Meeting Preferences">
                        {fieldMaker(Textarea, {...formFields.meetingLocation})}
                        {fieldMaker(Select, {...formFields.meetingDuration})}
                        {fieldMaker(Textarea, {...formFields.interests})}
                    </Fieldset>
                    <Fieldset legend="Parting Thoughts">
                        {fieldMaker(Select, {...formFields.howYouFoundMe})}
                        {fieldMaker(Textarea, {...formFields.extras})}
                        
                    </Fieldset>
                    <Submit title="Submit"/>

                </Form>
            </div>
        </Section>
    )
};

export default Reservationform;