"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/productPage.module.scss'
import MyLoader from './Loader'


const ProductPage = ({title, specificProduct}) => {

  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const [volume, setVolume] = useState([]);
  const prod = specificProduct[0];

  //volumes to array

  function volumes(){
    if (prod.volume){
      let volumesArray = prod.volume.split(' / ');
      setVolume(volumesArray);  
    }
  }

  //split the text 2 col

  function splitDescription(){
    const regex = /([^:]+):(.+)/g;
    let match;
    const rows = [];
    while ((match = regex.exec(prod.description)) !== null) {
      const key = match[1].trim();
      const value = match[2].trim();
      rows.push({ key, value });
    }
    setDescription(rows);
    setLoading(false);
  }

  useEffect(() => {
    splitDescription(prod.description);
    volumes();
  }, [prod.description, prod.volume]);
  
  
  return (
    <div className={styles.wrapp}>
      <div className={styles.left}>
        <div className={styles.image}>
        <img src={prod.image} alt="image" />        
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{prod.name}</div>
        <div className={styles.description}>
        <>
        {loading ?  
        <ul className={styles.descriptionList}>
          <li className={styles.description__column}>
          <MyLoader/>
          </li>
        </ul>
        :  description.map((item, index) => (
          <ul key={index} className={styles.descriptionList}>
            <li className={styles.description__column}>{item.key}:</li> 
            <li className={styles.description__column}>{item.value}</li>
          </ul>
        ))}
      </>
        </div>

        <div className={styles.low}>
          <div className={styles.price}>{prod.price}<span> ₴</span></div>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.volume}>
              {volume.map((item)=>(
                <span>{item}</span>
              ))}
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

