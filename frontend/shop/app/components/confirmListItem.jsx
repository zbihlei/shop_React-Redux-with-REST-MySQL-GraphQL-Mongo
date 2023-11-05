"use client"
import React from 'react'
import Link from 'next/link'
import styles from '../styles/confirmListItem.module.scss'

const ConfirmListItem = ({id, type, name, image ,price, volume, quantity, path}) => {

  return (
    <>
        <div className={styles.wrapp}>
      <div className={styles.item}>
      <Link href={`http://localhost:3000/${path}`} key={id} style={{textDecoration: 'none'}}>
      <div className={styles.item} >
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.price}>{price}<span> ₴</span></div>
        <div className={styles.quantity}>{quantity}<span> pcs</span></div>
        <div className={styles.quantity}>{volume !== undefined ? volume + 'L' : 'standard'}</div>
      </div>
      </Link>
      </div>
    </div>

    </>
  )
}

export default ConfirmListItem