"use client"
import React from 'react'
import styles from '../styles/main.module.scss'
import Link from 'next/link'
import {useAuth} from '../hooks/useAuth'

export default function Main({general}) {

const {isAuth, email} = useAuth();

  return (
    <div className={styles.wrapp}>
      {isAuth ? 
      <>
      <div className={styles.name}>Hello <Link href='/user' className={styles.link}>{email}</Link> </div>
      </>: null}

      {general.map(gen => (
        <Link 
        importance="high"
        rel="preload"   
        key={gen.id}  
        href={gen.type} 
        className={`${styles.part} ${gen.id === 1 ? styles.background1 : styles.background2}`}
        >
          <span>{gen.type}</span>
        </Link>
      ))}
    </div>
  );
}




 
