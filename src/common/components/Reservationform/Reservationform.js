import { navigate } from "gatsby"
import { useAlert } from 'react-alert';
import React, {useState} from 'react';

import checkValidity from '../../../util/validation';
import Fieldset from '../Form/Fieldset/Fieldset'
import Form from '../Form/Form';
import Input from '../Form/Input/Input'
import Section from '../../layouts/Section/Section';
import Sectiontitle from '../../layouts/Section/Sectiontitle/Sectiontitle';
import Select from '../Form/Select/Select'
import Submit from '../Form/Submit/Submit';
import Textarea from '../Form/Textarea/Textarea'
import Checkbox from '../Form/Checkbox/Checkbox'

import styles from './Reservationform.module.css';

const Reservationform = (props) => {

    const formName = 'reservation'

    const alertPopup = useAlert();

    const defaultSelectOption = {value: "-- select an option --", disabled: true}

    const screeningTypes = [
        {value: "Picture Id"},
        {value: "Employment Verification"},
        {value: "Provider References"}
    ]

    const formFieldsDefault = {
        firstName: {
            name:'firstName',
            label: "First Name",
            validation: {
                required: true,
            },
            value: '',
            valid: false,
            touched: false,
            error: false,
        },
        lastName: {
            name: 'lastName',
            label: "Last Name",
            validation: {
                required: true,
            },
            value: '',
            valid: false,
            touched: false,
            error: false,
        },
        email: {
            name:'email',
            label: "Email",
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        phone: {
            name: 'phone',
            label: "Phone",
            validation: {
                required: true,
                isPhone: true,
            },
            value: '',
            valid: false,
            touched: false,
            error: false,
        },
        screeningProfession: {
            name: 'screeningProfession',
            label: "Profession",
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        screeningCategory : {
            name: 'screeningCategory',
            label: "Type of screening information",
            options: [
                defaultSelectOption,
                {value:"Official Photo Id (drivers license, passport, etc.)"},
                {value: "LinkedIn/Employment Verification and Provider References"}
            ],
            value: defaultSelectOption.value,
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        screeningVerification: {
            name: 'screeningVerification',
            label: "Employment verification / LinkedIn profile and Provider References",
            value: '',
            validation: {
                required: false,
            },
            valid: false,
            touched: false,
            error: false,
        },
        meetingLocation: {
            name: 'meetingLocation',
            label: "When and where would you like to meet?",
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        meetingDuration: {
            name: 'meetingDuration',
            label: "Desired duration of our time together?",
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        interests: {
            name: 'interests',
            label: "What would you like me to know about you? What interests you about me?",
            value: '',
            validation: {
                required: false,
            },
            valid: true,
            touched: false,
            error: false,
        },
        howYouFoundMe: {
            name: 'howYouFoundMe',
            label: "How did you find me?",
            options: [
                defaultSelectOption,
                {value: "Tryst"},
                {value: "Slixa"},
                {value: "Eros"},
                {value: "Twitter"},
                {value: "Instagram"},
                {value: "Referral"},
                {value: "other"}
            ],
            value: defaultSelectOption.value,
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
        extras: {
            name: 'extras',
            label: "Anything else you'd like to mention? ...I do take kindly to compliments!",
            value: '',
            validation: {
                required: false,
            },
            valid: true,
            touched: false,
            error: false,
        },
        deposit: {
            name: 'deposit',
            label: "I understand a deposit is required to reserve our meeting",
            value: 'I understand a deposit is required to reserve our meeting',
            validation: {
                required: true,
                isChecked: true,
            },
            valid: false,
            touched: false,
            error: false,
        },
    }

    const [formFields, setFormFields] = useState(formFieldsDefault);

    const simplifiedFormResult = Object.keys(formFields).reduce((acc,field) => {
        acc[field] = formFields[field].value;
        return acc;
    },{});

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const submitHandler = e => {
        e.preventDefault()
        const validationArray = Object.keys(formFields).map(key => {
            return {key:key, name:formFields[key].name, valid: formFields[key].valid, validation: formFields[key].validation, label: formFields[key].label}
        })

        let allValid = true

        for (let field of validationArray) {
            let error = []
            if (!field.valid) {
                if (field.validation.required) {
                    error = [...error, 'is required']
                }
                if (field.validation.isEmail) error = [...error, 'must be a valid email address']
                if (field.validation.isPhone) error = [...error, 'must be a valid phone number']
                alertPopup.error( `'${field.label}' ${error.join(' and ')}`);
                allValid = false
                break;
            }
          }

        if (allValid) {
            console.log('submit',simplifiedFormResult)
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": formName, ...simplifiedFormResult })
            })
                .then(() => navigate('/thanks'))
                .catch(error => alertPopup.error(error));
        }

    }

    const changeHandler = e => {
        const validity = checkValidity(e,formFields[e.target.name].validation)
        console.log('change',!validity)
        setFormFields({...formFields,
            [e.target.name]: {...formFields[e.target.name],
                value: e.target.value,
                valid: validity,
                touched: true
            } })
    }
    const blurHandler = e => {
        const validity = checkValidity(e,formFields[e.target.name].validation)
        console.log('blur',!validity)
        setFormFields({...formFields,
            [e.target.name]: {...formFields[e.target.name],
                valid: validity,
                error: !validity
            } })
    }

    const fieldMaker = (Field, props) => {
        const {name,label,error, value,validation = {}, options} = props
        return Field ? (
            <Field
                label={label}
                name={name}
                value={value}
                required={validation.required}
                change={changeHandler}
                blur={blurHandler}
                optionsArray={options}
                error={error}
            />
        ) : null
    }

    return (
        <Section>
            <div>
                <Sectiontitle>Reservation Form</Sectiontitle>
                <Form name={formName} action='/thanks' submit={submitHandler}>
                    <input type="hidden" id="form-type" name="form-type" value="In Person Affair" />
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
                        {fieldMaker(Select, {...formFields.screeningCategory})}
                        <div className={styles.details}>
                            <p>If you selected Photo Id, take a photo of your id and send to my encrypted email address: <a href="mailto:florasparks@protonmail.com">florasparks@protonmail.com</a>.</p>
                            <p>If you selected employment verification and provider references, please fill in your info below.</p>
                        </div>
                        {fieldMaker(Textarea, {...formFields.screeningVerification})}
                        <div className={styles.details}>
                            <p>After our first session, I delete all private info.</p>
                        </div>
                    </Fieldset>
                    <Fieldset legend="Meeting Preferences">
                        {fieldMaker(Input, {...formFields.meetingDuration})}
                        {fieldMaker(Textarea, {...formFields.meetingLocation})}
                        {fieldMaker(Textarea, {...formFields.interests})}
                    </Fieldset>
                    <Fieldset legend="Parting Thoughts">
                        {fieldMaker(Select, {...formFields.howYouFoundMe})}
                        {fieldMaker(Textarea, {...formFields.extras})}
                    </Fieldset>
                    <Fieldset legend="Deposit">
                        {fieldMaker(Checkbox, {...formFields.deposit})}
                    </Fieldset>
                    <Submit title="Submit"/>

                </Form>
            </div>
        </Section>
    )
};

export default Reservationform;