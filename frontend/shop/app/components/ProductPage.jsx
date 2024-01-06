"use client"

import styles from '../styles/productPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { addToBasket } from '../slices/basketSlice';
import { usePathname } from 'next/navigation';
import Spiner from '../components/Spinner';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { SP } from 'next/dist/shared/lib/utils';

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

const ProductPage = ({title, specificProduct, gqlQuery}) => {
  
  const pathname = usePathname(); //also need with sql

  const id = pathname.split('/').pop();
  const { data, loading } = useQuery(gqlQuery, {
    variables: { id: id },
  });
  const firstKey = data ? Object.keys(data)[0] : null;
  const prod = firstKey ? data[firstKey] : [];


  const beer = title  === 'beer';
  const energetic = title  === 'energetic';
  const coctail = title  === 'coctail';
  const craft = title  === 'craft';
  const wine = title  === 'wine';
  const whiskey = title  === 'whiskey';

  // const prod = specificProduct[0];
//   let firstVol;
//     if (prod.volume) {
//   firstVol = prod.volume.split(' / ')[0];
// }

  // const [description, setDescription] = useState([]);
  const [volume, setVolume] = useState([]); // firstVol initial state with sql
  const [quantity, setQuantity] = useState(1);
  const [chosenVol, setChosenVol] = useState();
  const [pricesWithVolumes, setPricesWithVolumes] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); 
  const [isClicked, setIsClicked] = useState(false);
  
  const dispatch = useDispatch();
  const quantityRef = useRef(quantity);  

  useEffect(() => {
    // splitDescription(prod.description);
    volumes();
    calculateNewPrices(prod.price, volume);
    calculateTotalPrice();
  }, [prod.description, prod.volume, volume.length, quantity, chosenVol, totalPrice]);

  //new item add to basket

  const newItem = {
    // id: prod.id,
    id: prod._id,
    type: prod.type,
    name: prod.name,
    image: prod.image,
    price: totalPrice,
    quantity: quantity,
    volume: chosenVol,
    path: pathname
  }

  //styles for button onClick
  
  const buttonStyles = {
    backgroundColor: isClicked ? 'rgb(242, 30, 168)' : 'black',
    transition: 'all 0.5s ease',
    transform: isClicked ? 'scale(1.2)' : null,
    color: isClicked ? 'white' : null,
  };

  // handle click fn

  const handleClick = () => {
    setIsClicked(true);
    dispatch(addToBasket(newItem));
  
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  
  //handle click quantity

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    quantityRef.current = newQuantity;
  };

  //volumes to array

  function volumes(){
    if (prod.volume){
      let volumesArray = prod.volume.split(' / ');
      setVolume(volumesArray);  
    }
  }

  //split the text 2 col

  // function splitDescription(){
  //   const regex = /([^:]+):(.+)/g;
  //   let match;
  //   const rows = [];
  //   while ((match = regex.exec(prod.description)) !== null) {
  //     const key = match[1].trim();
  //     const value = match[2].trim();
  //     rows.push({ key, value });
  //   }
  //   setDescription(rows);
  //   setLoading(false);
  // }

    //prices with volumes

  const calculateNewPrices = (price, volumes) => {
    if (typeof price !== 'number' || !Array.isArray(volumes)) {
      return;
    }
    const newPrices = {};
    
    volumes.forEach((volume) => {
      const volumeValue = parseFloat(volume);
      if (!isNaN(volumeValue)) {
        newPrices[volume] = (price * volumeValue) * 2;
      }
    });
    
    setPricesWithVolumes(newPrices);
  };

  const calculateTotalPrice = () => {
    const pricePerUnit = prod.volume ? (pricesWithVolumes[chosenVol] || prod.price) : prod.price;
    const newTotalPrice = pricePerUnit * quantity;
    setTotalPrice(newTotalPrice);
  };
  
  return (
    
    <div className={`${styles.wrapp} 
    ${beer ? styles.beer : ''}
    ${energetic ? styles.energetic : ''}
    ${coctail ? styles.coctail : ''}
    ${craft ? styles.craft : ''}
    ${wine ? styles.wine : ''}
    ${whiskey ? styles.whiskey : ''}`}>

    {loading?
    <Spiner/>
    :
    <>
          <div className={styles.left}>
        <div className={styles.image}>
        <img src={prod.image} alt="image" />        
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{prod.name}</div>
        {/* <div className={styles.description}>
        <>
        {loading ?  
        <div className={styles.loading}>
          <ul className={styles.descriptionList}>
            <li className={styles.description__column} >
            <MyLoader/>
            </li>
          </ul>
        </div>
        :
         description.map((item, index) => (   
          <ul key={index} className={styles.descriptionList}>
            <li className={styles.description__column}>{item.key}:</li> 
            <li className={styles.description__column}>{item.value}</li>
          </ul>
        ))}
      </>
        </div> */}
      <div className={styles.descriptionList}>
        {prod.description}
      </div>

        <div className={styles.low}>
          <div className={styles.price}>

            { totalPrice }
            
            <span> ₴</span></div>
            <div className={styles.quantity}>
              <button onClick={()=>handleQuantityChange(Math.max(1, quantityRef.current - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={()=>handleQuantityChange(Math.max(1, quantityRef.current + 1))}>+</button>
            </div>
            <div className={styles.volume}>
            {volume.length === 1 ? 
            <>
            {volume.map((item)=>(
                <span key={item} 
                      style ={{backgroundColor : 'black', color: 'white'}}>
                        {item}L
                </span> 
              ))}
            </>
            :
            <>
            {volume.map((item)=>(
                <span key={item} 
                      onClick={()=>setChosenVol(item)} 
                      style ={{backgroundColor : chosenVol === item ? 'black' : 'white', color: chosenVol === item ? 'white' : 'black'}}>
                        {item}L
                </span> 
              ))}
            </>}
            </div>
            <div className={styles.buy}>
              <button  onClick={()=>handleClick()}
              style = {buttonStyles}
              >Buy</button>
            </div>
        </div>
      </div>

    </>}
    </div>
  )

}

export default ProductPage

