"use client"

import styles from '../styles/main.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

export default function Main({general, gqlQuery}) {

  const [modalVisible, setModalVisible] = useState(true);
  const { data } =  useQuery(gqlQuery);
  const firstKey = data ? Object.keys(data)[0] : null;
  const list = firstKey ? data[firstKey] : [];


  useEffect(() => {
    const isModalShown = localStorage.getItem('isModalShown');
    if (isModalShown) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, []);

  function hideModal(){
    setModalVisible(false);
    localStorage.setItem('isModalShown', 'true');
  }

  return (
    <div className={styles.wrapp}>
     
      {modalVisible && <Modal hide={hideModal} />}

      {/* {general.map(gen => (  using with sql*/}
      {list.map(gen => (
        <Link 
        importance="high"
        rel="preload"   
        // key={gen.id}  
        // href={gen.type}
        key={gen._id}   
        href={gen.name} 
        className={`${styles.part} ${gen.id === 1 ? styles.background1 : styles.background2}`}
        >
          {/* <span>{gen.type}</span> */}
          <span>{gen.name}</span>
        </Link>
      ))}

  </div>
  );
}




 
