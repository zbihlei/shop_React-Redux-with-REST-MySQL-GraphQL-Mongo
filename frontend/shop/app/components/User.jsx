"use client"
import {useAuth} from '../hooks/useAuth'
import styles from '../styles/user.module.scss'
import { useDispatch } from "react-redux";
import {removeUser} from '../slices/userSlice';
import { useRouter } from 'next/navigation'
import { getOrdersByEmail } from '../services/getData';
import { useState,  useEffect } from 'react';

const User = () => {
    const [orders, setOrders] = useState([]);
    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();
    
    if(!isAuth) router.push('/auth');

    useEffect(()=>{
      getOrdersByEmail(email).then(res => setOrders(res));
    },[email]);

console.log(orders)
  return (
    <div className={styles.wrapp}>
      <div className={styles.top}>
      <h5>hello {email}</h5>
        <button onClick={()=>dispatch(removeUser())}>Log out</button>
      </div>
        <h6>Orders history</h6>
        <div className={styles.ordersWrapp}>
        {orders.map((item)=>(
          <div key={item.id} className={styles.item}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.type}>{item.type}</div>
            <img src={item.image} alt="image"/>
            {item.volume ? <div className={styles.volume}>{item.volume}{item.volume}</div> : null}
            <div className={styles.price}>{item.price}</div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default User