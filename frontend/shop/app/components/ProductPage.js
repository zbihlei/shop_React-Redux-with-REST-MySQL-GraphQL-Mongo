"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/productPage.module.scss'


const ProductPage = ({title, specificProduct}) => {

  const [description, setDescription] = useState([]);

  const prod = specificProduct[0];

  //split the text 2 col
  const text = prod.description;
  const regex = /([^:]+):(.+)/g;
  let match;
  const rows = [];
  while ((match = regex.exec(text)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    rows.push({ key, value });
  }

  useEffect(()=>{
    setDescription(rows);
  },[description])
  
  
  return (
    <div className={styles.wrapp}>
      <div className={styles.left}>
        <img src={prod.image} alt="image" />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{prod.name}</div>
        <div className={styles.description}>
        <>
        {description.map((item, index) => (
          <div key={index} className={styles.descriptionList}>
            <div className={styles.description__column}>{item.key}:</div> 
            <div className={styles.description__column}>{item.value}</div>
          </div>
        ))}
      </>
        </div>

        <div className={styles.low}>
          <div className={styles.price}>{prod.price}</div>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.volume}>
              <span>0.5L</span>
              <span>1L</span>
              <span>2L</span>
            </div>
            <div className={styles.buy}>
              <button>Buy</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage