"use client"
import React from 'react'
import Link from 'next/link'
import styles from '../styles/basketItem.module.scss'
import { useDispatch } from "react-redux"
import {deleteFromBasket} from '../slices/basketSlice';

const BasketItem = ({id, type, name, image ,price, volume, quantity, path}) => {

    const dispatch = useDispatch();
  return (
    <div className={styles.wrapp}>
      <div className={styles.item}>
      <Link href={`http://localhost:3000/${path}`} key={id} style={{textDecoration: 'none'}}>
      <div className={styles.item} >
        <div className={styles.image}>
          <img src={image} alt="image" />
        </div>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.price}>{price}<span> ₴</span></div>
        <div className={styles.quantity}>{quantity}<span> pcs</span></div>
        {volume!== 0 ? <div className={styles.quantity}>{volume}L</div> : null}       
      </div>
      </Link>
        <button className={styles.delete}  onClick={()=>dispatch(deleteFromBasket({id, volume}))}>delete</button>
      </div>
    </div>
  )
}

export default BasketItem