"use client"
import React from 'react'
import styles from '../styles/main.module.scss'
import Link from 'next/link'


export default function Main({general}) {

  return (
    <div className={styles.wrapp}>
      {general.map(gen => (
        <Link key={gen.id}  href={gen.type} className={styles.part}>
          <span>{gen.type}</span>
        </Link>
      ))}
    </div>
  );
}




 
