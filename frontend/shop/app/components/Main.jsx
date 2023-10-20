
import React from 'react'
import styles from '../styles/main.module.scss'
import Link from 'next/link'
import { useGetGeneralQuery } from '../api/apiSlice'

const Main =  ({props}) => {

  return (
    general.map(gen=>{
      <div className={styles.wrapp}>
      <Link key={gen.id} href='/products' className={styles.part}>
        <span>{gen.type}</span>
      </Link>
    </div>
    })
  )
}
export default Main


