"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LOCAL_HOST } from '../utils/constants';
import { searchByName } from '../services/getData';
import styles from '../styles/search.module.scss';

const Search = () => {

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState([]);

  const Search = (e) =>{
    setFilter(e.target.value)
  }

  useEffect(() => {
    if (filter.trim() !== '') {
      searchByName(filter).then((res) => {
        setSearch(res);
        console.log(search);
      });
    } else {
      setSearch([]);
    }
  }, [filter]);

  return (
    <div className={styles.wrapp}>
        <div className={styles.serachhead}>today  I <span>want</span>...</div>
    <input onChange={Search} type="search" className={styles.searchfield} />
    {search.length > 0 ? 
       <div className={`${styles.searchbox} ${styles.scrollable}`}>
         {search.map((el)=>(
          <Link href={`${LOCAL_HOST}/${el.type}/${el.subtype}/${el.id}`} className={styles.searchel} key={el.id} onClick={()=>{setSearch([]), e.target.value = ''}}>
            <div className={styles.image} style={{ backgroundImage: `url(${el.image})`}}/>
            <div className={styles.name}>{el.name}</div>
          </Link>
          ))}
       </div> : null}
    </div>
  )
}

export default Search