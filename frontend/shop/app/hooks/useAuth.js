import { Mali } from "next/font/google";
import { useSelector } from "react-redux";

export function useAuth(){
    const {email, token,id} = useSelector((state) =>state.user);
    // return{
    //     isAuth: !!email,
    //     email,
    //     token,
    //     id,
    // };
    return{
        isAuth: true,
        email: 'm@mail.com',
        token,
        id,
    };
}