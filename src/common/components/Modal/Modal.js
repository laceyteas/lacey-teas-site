import React, {Fragment, useState} from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button'

const Modal = (props) => {
    const [modalToggle, setModalToggle] = useState(true);

    const toggleModal = () => setModalToggle( modalToggle => !modalToggle );

    const clickYes = () => {
        if (props.clickYes) {
                props.clickYes();
        }
        toggleModal();
    }

    const ModalButtons = () => {
        return (
            <div className={styles.Modalbuttons}>
                <div className={styles.Modalbuttonsinner} >
                    <Button click={clickYes} type="yes">{props.buttonYes}</Button>
                    <Button click={props.clickNo} type="no">{props.buttonNo}</Button>
                </div>
            </div>
        )
    }
    
    if (modalToggle) {
        return (
            <Fragment>
                <div className={styles.Modal} >
                    {props.children}
                    { props.modalButtons ? <ModalButtons /> : null }
                </div>
                { props.backdropClose ? <Backdrop show={modalToggle} close={toggleModal} /> : <Backdrop show={modalToggle} /> }
            </Fragment>
        )
    } else return null
    
}

export default Modal;