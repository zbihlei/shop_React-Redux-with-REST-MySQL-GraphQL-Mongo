"use client"
import React from 'react'
import styles from '../styles/buyed.module.scss'
import { useRouter } from 'next/navigation'

const Buyed = () => {
    const router = useRouter();

    setTimeout(()=>{
        router.push('/');
    },3000 )
  return (
    <div className={styles.wrapp}>
        <div className={styles.text}>
           <span>Thank you!</span>Our manager will contact you soon...
        </div>
    </div>
  )
}

export default Buyed