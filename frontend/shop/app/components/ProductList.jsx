import React from 'react'
import styles from '../styles/productslist.module.scss'
import Link from 'next/link'


const ProductList = ({specific, title}) => {

  return (

<div className={styles.wrapp}>
   {specific.map(item => (
    <Link href={`http://localhost:3000/${title}/${item.name}`} key={item.name}>
     <div className={styles.item} >
       <img src={item.image} alt="image" />
       <div className={styles.name}>
         {item.name}
       </div>
       {item.description ? <div className={styles.description}>{item.description}</div> : null}
       {item.price ? <div className={styles.price}>{item.price}</div> : null}
     </div>
     </Link>
   ))}
   </div>

  )
}

export default ProductList