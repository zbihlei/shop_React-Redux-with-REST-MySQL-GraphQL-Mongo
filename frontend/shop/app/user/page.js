"use client"
import Admin from '../components/Admin'
import Customer from '../components/Customer';
import {useAuth} from '../hooks/useAuth';

export default function UserPage(){
  const {email} = useAuth();

  return (
    <>
  {email === 'admin@mail.com' ? 
    <Admin/>
    :
    <Customer/>
    }
    </>
  )
}

