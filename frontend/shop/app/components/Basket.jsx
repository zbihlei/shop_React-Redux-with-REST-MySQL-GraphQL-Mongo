"use client"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import BasketItem from '../components/BasketItem'
import styles from '../styles/basket.module.scss'

const Basket = () => {

  const basket= useSelector((state)=>state.basket.basket);

  return (
    <div className={styles.wrapp}>
        {basket.length ? basket.map((item)=> (<BasketItem key = {item.id} {...item}/>))
         : 
        <div className={styles.empty}> The basket is empty!</div> }
    </div>
  )
} 

export default Basket