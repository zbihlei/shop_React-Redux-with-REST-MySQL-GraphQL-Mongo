"use client"

import styles from '../styles/main.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {GET_GENERAL} from '../services/apollo/queries';
if (process.env.NODE_ENV === 'development') { 
  loadDevMessages();
  loadErrorMessages();
}

export default function Main({general}) {

  const [modalVisible, setModalVisible] = useState(true);
  const { loading, data } =  useQuery(GET_GENERAL);

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

      {/* sql version */}
      {/* {general.map(gen => (
        <Link 
        importance="high"
        rel="preload"   
        key={gen.id}  
        href={gen.type} 
        className={`${styles.part} ${gen.id === 1 ? styles.background1 : styles.background2}`}
        >
          <span>{gen.type}</span>
        </Link>
      ))} */}

      {!loading && data && data.getGeneral && (

        data.getGeneral.map(gen => (
          <Link
            importance="high"
            rel="preload"
            key={gen._id}
            href={gen.name}
            className={`${styles.part} ${gen._id === 1 ? styles.background1 : styles.background2}`}
          >
            <span>{gen.name}</span>
          </Link>
        ))
      )}
  </div>
  );
}




 
