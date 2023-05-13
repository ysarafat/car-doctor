/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // sign up user by email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currantUser) => {
            setUser(currantUser);
        });
        return unSubscribe();
    }, []);
    const authInfo = {
        user,
        createUser,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
