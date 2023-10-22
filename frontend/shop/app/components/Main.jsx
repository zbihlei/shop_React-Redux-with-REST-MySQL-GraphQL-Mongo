import React, { use } from 'react'
import styles from '../styles/main.module.scss'
import Link from 'next/link'
import getGeneral from '../actions/getGeneral';


export default async function Main() {
  const general = await getGeneral();

  return (
    <div className={styles.wrapp}>
      {general.map(gen => (
        <Link key={gen.id} href='/products' className={styles.part}>
          <span>{gen.type}</span>
        </Link>
      ))}
    </div>
  );
}





