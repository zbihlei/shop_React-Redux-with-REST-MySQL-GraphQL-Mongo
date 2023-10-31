import { Form } from '../components/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase-config';

const SignUp = ()=>{
    const dispatch = useDispatch();

    const handleRegister =(email, password)=>{
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken, 
                }));
            })
            .catch(console.error)
    }

    return (
        <Form
        title ='register'
        handleClick={handleRegister}
        />
    )

}

export {SignUp}

