"use client"
import {useAuth} from '../hooks/useAuth'
import styles from '../styles/user.module.scss'
import { useDispatch } from "react-redux";
import {removeUser} from '../slices/userSlice';
import { useRouter } from 'next/navigation'


const User = () => {

    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();
    
    if(!isAuth) router.push('/auth')

  return (
    <div className={styles.wrapp}>
        <h5>hello {email}</h5>
        <button onClick={()=>dispatch(removeUser())}>Log out</button>
        <div>Orders history</div>
    </div>
  )
}

export default User