"use client"
import React, { useState, useRef } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from '../styles/confirmForm.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { postData } from '../services/getData'
import { clearBasket } from '../slices/basketSlice';
import { useRouter } from 'next/navigation'
import { useAuth } from '../hooks/useAuth';

const ConfirmForm = () => {

  const [isClicked, setIsClicked] = useState(false);
  const basket = useSelector((state)=>state.basket.basket);
  const dispatch = useDispatch();
  const router = useRouter();
  const {isAuth, email} = useAuth();



  const handleSubmit = (client) => {
    setIsClicked(true);
      const data = {
        client,
        basket,
      }
      const jsonData = JSON.stringify(data);

        
      postData("http://localhost:8800/orders", jsonData)
        .then(res => {
          console.log(res);
        }).then(
          dispatch(clearBasket())
        ).then(
          router.push('/buyed', { scroll: false })
        )
        .catch(error => {
          console.log(error)
        });


    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  
  const buttonStyles = {
    backgroundColor: isClicked ? 'rgb(242, 30, 168)' : 'black',
    transition: 'all 0.5s ease',
    transform: isClicked ? 'scale(1.2)' : null,
    color: isClicked ? 'white' : null,
  };


  return (
  <>
      {basket.length ? 
      <Formik
      initialValues = {{
          name: '',
          email: isAuth ? email : '',
          surname: '',
          phone: ''
      }}
      validationSchema={
          Yup.object({
              name: Yup.string()
                       .min(2, 'Minimum 2 symb.') 
                       .required('Required field!'),
              email: Yup.string()
                       .email('Wrong email adress')
                       .required('Required field!'),
               surname: Yup.string()
                           .required('Required field!'),
               phone: Yup.number()
                           .min(8)
                           .required('Required field!')
           })} 
           onSubmit = {(client)=>handleSubmit(client)}
      >
  <div className={styles.wrapp}> 
          <Form className={styles.form}>
              <h2>client info</h2>
  
           <label htmlFor="text">name</label>
           <Field
              label="name"
              id="name"
              name="name"
              type="text"
              />          
          <ErrorMessage className={styles.error} name='name' component="div"/>  
  
          <label htmlFor="text">surname</label>          
          <Field
              label="surname"
              id="surname"
              name="surname"
              type="text"
              />          
          <ErrorMessage className={styles.error} name='surname' component="div"/>   
          <label htmlFor="text">phone</label>          
          <Field
              label="phone"
              id="phone"
              name="phone"
              type="tel"
              />          
          <ErrorMessage className={styles.error} name='phone' component="div"/>   
  
          <label htmlFor="text">email</label>
             <Field
              style={{marginBottom: '20px', textTransform: 'none'}}
              label="email"
              id="email"
              name="email"
              type="email"
             />    
          <ErrorMessage  className={styles.error} name='email' component="div"/> 
        
              <button style = {buttonStyles} type="submit">order</button>
          </Form>
           </div>
      </Formik>

      :
       null}

  </>

  )
}

export default ConfirmForm