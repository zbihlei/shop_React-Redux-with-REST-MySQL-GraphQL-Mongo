import React from 'react'
import styles from '../styles/productsList.module.scss'
import Link from 'next/link'


const ProductList = ({specific, title}) => {

  console.log(title);

  const barCount = specific && specific.some(item => item.type);
  const beer = title  === 'beer';
  const energetic = title  === 'energetic';
  const coctail = title  === 'coctail';
  const craft = title  === 'craft';
  const wine = title  === 'wine';
  const whiskey = title  === 'whiskey';

  return (

    <div className={`${styles.wrapp} 
    ${barCount ? '' : styles.barCount} 
    ${beer ? styles.beer : ''}
    ${energetic ? styles.energetic : ''}
    ${coctail ? styles.coctail : ''}
    ${craft ? styles.craft : ''}
    ${wine ? styles.wine : ''}
    ${whiskey ? styles.whiskey : ''}`}>



    {specific.map(item => (
    <>
    {item.type ?  
    
    <Link importance="high" rel="preload"  href={`http://localhost:3000/${item.type}/${title}/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
    <div className={styles.item} >
      <div className={styles.image}>
        <img src={item.image} alt="image" /> 
      </div>
      <div className={styles.name}>
        {item.name}
      </div>
       <div className={styles.description}>{item.description.slice(0,100)}</div>
       <div className={styles.price}>{item.price}<span> ₴</span></div>
    </div>
    </Link>
  
   :   

    <Link importance="high" rel="preload"   href={`http://localhost:3000/${title}/${item.name}`} key={item.id} style={{textDecoration: 'none'}}>
    <div className={styles.item} >
    <div className={styles.image}>
        <img src={item.image} alt="image" />
    </div>
      <div className={styles.name}>
        {item.name}
      </div>
    </div>
    </Link>

 }
    </>
      ))}
</div>
  )
}

export default ProductList
