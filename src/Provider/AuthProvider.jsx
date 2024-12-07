import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.config'
import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)
   
    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {user,setUser,loader,setLoader,createUser,signin}
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;