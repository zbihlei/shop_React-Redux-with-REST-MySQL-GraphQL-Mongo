"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/basketItem.module.scss'
import { useDispatch, useSelector } from "react-redux"
import {deleteFromBasket, setGoods} from '../slices/basketSlice';

const BasketItem = ({id, type, name,image ,price, volume, quantity, path}) => {

    const dispatch = useDispatch();
//     const basket = useSelector((state) => state.basket.basket);


// function updateItemInBasket(basket, newItem) {
//   const existingItem = basket.find((item) => item.id === newItem.id);
//   if (existingItem) {
//     return basket.map((item) =>
//       item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//   } else {
//     return [...basket, { ...newItem, quantity: 1 }];
//   }
// }

// const newItem = {
//   id,
//   type,
//   name,
//   image,
//   price,
//   volume,
//   path,
// };

// const updated = updateItemInBasket(basket, newItem);

// useEffect(()=>{
//   updateItemInBasket(basket, newItem);
//   dispatch(setGoods(updated));
// },[basket])


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
        {volume!== 0 ? <div className={styles.quantity}>{volume}</div> : null}       
      </div>
      </Link>
        <button className={styles.delete}  onClick={()=>dispatch(deleteFromBasket(id))}>delete</button>
      </div>
    </div>
  )
}

export default BasketItem