"use client"
import { Form } from '../components/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase-config'

const Login = ()=>{
    const dispatch = useDispatch();

    const handleLogin =(email, password)=>{
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken,
                }));
            })
            .catch(() => alert('Invalid user!')) 


    }
    return ( 
        <Form
        title = 'Login'
        handleClick={handleLogin}/>
    )
}
export {Login}