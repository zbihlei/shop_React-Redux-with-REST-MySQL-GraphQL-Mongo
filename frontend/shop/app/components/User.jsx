"use client"
import {useAuth} from '../hooks/useAuth'
import styles from '../styles/user.module.scss'
import { useDispatch } from "react-redux";
import {removeUser} from '../slices/userSlice';
import { useRouter } from 'next/navigation'
import { getOrdersByEmail, getAllOrders } from '../services/getData';
import { useState,  useEffect } from 'react';
import Link from 'next/link';

const User = () => {
    const [orders, setOrders] = useState([]);
    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();


    if(!isAuth) router.push('/auth');

    useEffect(()=>{
      if(email === 'admin@mail.com'){
        getAllOrders().then(res => setOrders(res));
      }else{
        getOrdersByEmail(email).then(res => setOrders(res));
      }
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
         {orders.map((item, index)=>(

          <Link key={item.id}  className={styles.link} href={`http://localhost:3000${item.path}`}>

            {index === 0 || item.date !== orders[index - 1].date ? (
                <div className={styles.time}>
                    <span>{item.date}</span>
                </div>
            ) : null}

            {email === 'admin@mail.com' && (index === 0 || (item.date !== orders[index - 1].date && email === 'admin@mail.com')) ? (
               <>
               <div className={styles.adminWrapp}>
                    <span>{item.firstname}</span>
                    <span>{item.surname}</span>
                    <span>{item.phone}</span>
                    <span>{item.email}</span>
                </div>
              <div className={styles.buttonsAdmin}>
                <button className={styles.adminBtn}>processed</button>
                <button className={styles.adminBtn}>cancelled</button>
              </div>
              </>
            ) : null}

            <div className={styles.item}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.type}>{item.type}</div>
              <div className={styles.image}>            
                <img src={item.image} alt="image"/>
              </div>
              {item.volume ? <div className={styles.volume}>{item.volume}L</div> : <div className={styles.volume}>STANDART</div>}
              <div className={styles.price}>{item.price} <span style={{fontSize: '14px'}}>₴</span> </div>
            </div>

          </Link>
        ))}
        </> : 
        <div className={styles.text}>No orders yet...</div>
      }
        </div>
    </div>
  )
}

export default User