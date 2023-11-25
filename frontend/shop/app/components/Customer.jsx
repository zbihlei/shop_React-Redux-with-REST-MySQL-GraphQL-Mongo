import styles from '../styles/user.module.scss';
import { useState,  useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
import { useDispatch } from "react-redux";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {removeUser} from '../slices/userSlice';
import { getOrdersByEmail } from '../services/getData';
import { LOCAL_HOST } from '../utils/constants';


const Customer = () => {

    const [orders, setOrders] = useState([]);
    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();

    if(!isAuth) router.push('/auth');

    useEffect(()=>{
      getOrdersByEmail(email).then(res => setOrders(res));
    },[email]);
    
  return (
    <div className={styles.wrapp}>
      <div className={styles.top}>
      <h5>hello {email}</h5>
        <button onClick={()=>dispatch(removeUser())}>Log out</button>
      </div>
        <h6>Orders history</h6>
        <div className={styles.ordersWrapp}>
       {orders.length ? 
       <>
         {orders.slice().reverse().map((item, index)=>(
  
          <div key={item.id}  className={styles.link} href={''}>
            {index === 0 || item.date !== orders[index - 1].date ? (
                <div className={styles.time}>
                    <span>{item.date}</span>
                </div>
            ) : null}

            <Link href={`${LOCAL_HOST}${item.path}`} style={{textDecoration: 'none'}}>
                <div className={styles.item}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.type}>{item.type}</div>
                  <div className={styles.image}>            
                    <img src={item.image} alt="image"/>
                  </div>
                  {item.volume ? <div className={styles.volume}>{item.volume}L</div> : <div className={styles.volume}>STANDART</div>}
                  <div className={styles.price}>{item.price} <span style={{fontSize: '14px'}}>₴</span> </div>
                  <div className={styles.status}>{item.status}</div>
                </div>
            </Link>       
          </div>
        ))}
        </> : 
        <div className={styles.text}>No orders yet...</div>
      }
        </div>
    </div>
  )
}

export default Customer