"use client"
import React from 'react'
import { useSelector } from "react-redux"
import ConfirmListItem from '../components/ConfirmListItem';
import styles from '../styles/confirmList.module.scss'

const ConfirmList = () => {
    const basket= useSelector((state)=>state.basket.basket);

  return (
    <div className={styles.wrapp}>
        {basket.length ? basket.map((item)=> ( <ConfirmListItem key = {item.id} {...item}/>)) : null}
    
    </div>

  )
}

export default ConfirmList