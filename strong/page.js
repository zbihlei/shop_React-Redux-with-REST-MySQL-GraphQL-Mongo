import React from 'react'
import {getSpecific} from '../actions/getData';
import ProductList from '../components/ProductList'

export default async function Strong() {
    
    const title = 'strong'
    const specific = await getSpecific(title);
  
  return (
    <ProductList title={title} specific={specific}/>
  )
}

