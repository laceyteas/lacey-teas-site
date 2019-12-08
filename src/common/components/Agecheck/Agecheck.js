import React, {useState, useEffect} from 'react';
//import styles from './Agecheck.module.css';
import useSession, { UseSessionProvider } from 'react-session-hook';
import jwt from "jsonwebtoken";
import Modal from '../Modal/Modal';

const token = jwt.sign(
    {
      ageVerify: "Yes"
    },
    "secret"
  );

const SessionCheck = () => {

    const [allowed, setAllowed] = useState('precheck'); //precheck is before session check fires

    const session = useSession();

    const googleKittenSearch = () => {
        session.removeSession();
        window.location = "https://www.google.com/search?q=kittens&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiPt_TFx6riAhVIwcQHHckiD0EQ_AUIDigB&biw=1440&bih=812";
    } 

    const oldEnough = () => {
        session.setSession({ token })
    }

    useEffect(()=>{
        if (session.isAuthenticated) { setAllowed('allowed') } else { setAllowed('not allowed') }
    },[session,setAllowed])

    if (allowed === 'precheck' || allowed === 'allowed') {
        return (
            null
        )
      } else {
          return (
            <Modal show 
                buttonYes="I am 18+ and not offended by artistic nudes" 
                buttonNo="No, please take me to see photos of kittens"
                clickYes={oldEnough}
                clickNo={googleKittenSearch}
                modalButtons
                >
                This website contains content and images not suitable for minors. If you are under the age of 18 or are offended by adult-oriented websites, please browse elsewhere.
            </Modal>
          )
      }
};

const Agecheck = () => {

    return (
    <UseSessionProvider>
        <SessionCheck />
    </UseSessionProvider>
    )
}

export default Agecheck;