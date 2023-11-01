"use client"
import { Form } from '../components/Form'
import { useDispatch } from "react-redux";
import {setUser} from '../slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase-config'
import { useRouter } from 'next/navigation'

const Login = ()=>{
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin =(email, password)=>{
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken,
                }));
            }).then( router.push('/'))
            .catch(() => alert('Invalid user!')) 


    }
    return ( 
        <Form
        title = 'Login'
        handleClick={handleLogin}/>
    )
}
export {Login}