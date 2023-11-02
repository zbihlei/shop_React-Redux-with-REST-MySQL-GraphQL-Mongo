"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/productPage.module.scss'
import MyLoader from './Loader'
import { useDispatch} from "react-redux";
import { addToBasket } from '../slices/basketSlice';
import { usePathname } from 'next/navigation'

const ProductPage = ({title, specificProduct}) => {

  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const [volume, setVolume] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const prod = specificProduct[0];
  const dispatch = useDispatch();
  const pathname = usePathname();

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
              <button onClick={()=>setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={()=>setQuantity(Math.max(1, quantity + 1))}>+</button>
            </div>
            <div className={styles.volume}>
              {volume.map((item)=>(
                <span>{item}</span>
              ))}
            </div>
            <div className={styles.buy}>
              <button onClick={()=>dispatch(addToBasket([{
                 id: prod.id,
                 type:prod.type,
                 name: prod.name,
                 image: prod.image,
                 description: prod.description,
                 price: prod.price,
                 quantity: quantity,
                 path: pathname
              }]))}>Buy</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

