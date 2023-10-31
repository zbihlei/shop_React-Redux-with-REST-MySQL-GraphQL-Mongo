"use client"
import { Login } from '../components/LogIn'
import { SignUp } from '../components/SIgnUp'
import { useState } from "react";
import styles from '../styles/auth.module.scss'

const Auth = () => {
    const [register, setRegister]= useState(false);

  return ( 
  <div className={styles.authpage}>
    { register ? <h3 className={styles.authpage_head}>Register</h3> : <h3 className={styles.authpage_head}>Log in</h3> }
    
    <div className={styles.authpage_form}>

       {register ? <SignUp/> : <Login/>}
    </div>
    {!register ? 
    <div className={styles.authpage_link}><span>You can log in or</span> <button onClick={()=>setRegister(true)}>Register</button></div> 
    : 
    <div className={styles.authpage_link}><span>You can register or</span><button onClick={()=>setRegister(false)}>Log in</button></div> 
 }
    </div>
  )
}

export default Auth;