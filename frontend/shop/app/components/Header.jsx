"use client"

import Link from 'next/link';
import { useSelector } from 'react-redux';
import Search from '../components/Search';

const Header = () => {

  const basket= useSelector((state)=>state.basket.basket);

  return (
    <header>
    <div className='left'>
      <Link href='/' className='logo'/>
      <Search/>
    </div>

    <div className='right'>
    <Link href='/auth' className='user'/>
    <Link href='/basket' className='basket'>
          {basket.length ? <span className='basket_quantity'>{basket.length}</span> : null }
     </Link>
    </div>
     </header>
  )
}

export default Header