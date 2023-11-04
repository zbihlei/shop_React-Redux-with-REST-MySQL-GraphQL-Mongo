"use client"
import React from 'react'
import { useSelector } from "react-redux"
import BasketItem from '../components/BasketItem'
import styles from '../styles/basket.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Basket = () => {

  const pathname = usePathname();
  const basket= useSelector((state)=>state.basket.basket);

  return (
    <div className={styles.wrapp}>
        {basket.length ? basket.map((item)=> (
          <>
        <BasketItem key = {item.id} {...item}/>

          {pathname === '/basket' ?   
          <Link className={styles.confirm} href='/confirm'>Confirm</Link>
          :
          null
          }

          </>
        ))
         : 
        <div className={styles.empty}> The basket is empty!</div> }
    </div>
  )
} 

export default Basket