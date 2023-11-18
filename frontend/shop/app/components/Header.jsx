"use client"
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'


const Header = () => {
  const basket= useSelector((state)=>state.basket.basket);


  return (
    <header>
    <Link href='/auth'>
       <div className="user"></div>
       </Link>
     <Link href='/'>
       <div className="logo"></div>
       </Link>
       <Link href='/basket'>
       <div className="basket">
  
          {basket.length ? <span className='basket_quantity'>{basket.length}</span> : null }
     
       </div>
       </Link>
     </header>
  )
}

export default Header