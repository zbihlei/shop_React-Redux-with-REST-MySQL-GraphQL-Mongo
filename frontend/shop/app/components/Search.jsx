"use client"
import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBasket } from '../slices/basketSlice';
import Link from 'next/link';
import { LOCAL_HOST } from '../utils/constants';
import { searchByName } from '../services/getData';
import styles from '../styles/search.module.scss';

const Search = () => {

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState([]);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const Search = (e) =>{
    setFilter(e.target.value)
  }

 // when we go Link basket state is saved 
  const memoizedBasket = useMemo(() => {
    return basket.map(item => ({ ...item }));
  }, [basket]);

  const handleCLick = ()=>{
    setSearch([]);
     setFilter('');
    const newBasket = [...memoizedBasket];
    dispatch(updateBasket(newBasket));
  }

  useEffect(() => {
    if (filter.trim() !== '') {
      searchByName(filter).then((res) => {
        setSearch(res);
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

          <Link href={`${LOCAL_HOST}/${el.type}/${el.subtype}/${el.id}`} className={styles.searchel} key={el.id} onClick={()=>{handleCLick()}}>
            <div className={styles.image} style={{ backgroundImage: `url(${el.image})`}}/>
            <div className={styles.name}>{el.name}</div>
          </Link>
          ))}
       </div> : null}
    </div>
  )
}

export default Search