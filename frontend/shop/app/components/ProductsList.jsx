import React from 'react'
import styles from '../styles/productsList.module.scss'
import Link from 'next/link'


const ProductList = ({specific, title}) => {

  return (

<div className={styles.wrapp}>
    {specific.map(item => (
    <>
    {item.type ?  
    
    <Link href={`http://localhost:3000/${item.type}/${title}/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
    <div className={styles.item} >
      <img src={item.image} alt="image" />
      <div className={styles.name}>
        {item.name}
      </div>
       <div className={styles.description}>{item.description.slice(0,15)}</div>
       <div className={styles.price}>{item.price}<span> ₴</span></div>
    </div>
    </Link>
  
   :   
    <Link  href={`http://localhost:3000/${title}/${item.name}`} key={item.id} style={{textDecoration: 'none'}}>
    <div className={styles.item} >
      <img src={item.image} alt="image" />
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
