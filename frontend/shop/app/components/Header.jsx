import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <header>
    <Link href='/auth'>
       <div className="user"></div>
       </Link>
     <Link href='/'>
       <div className="logo"></div>
       </Link>
       <Link href='/basket'>
       <div className="basket"></div>
       </Link>
     </header>
  )
}

export default Header