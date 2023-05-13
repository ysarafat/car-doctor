/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // sign up user by email and password
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //  sign in user by email and pass
    const signInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout user
    const logoutUser = () => {
        setloading(true);
        signOut(auth)
            .then(() => {
                console.log('Sign Out done');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    // upadte user name
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                setloading(false);
            })
            .catch((err) => console.log(err.message));
    };

    // user observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currantUser) => {
            setUser(currantUser);
            setloading(false);
        });
        return () => {
            return unSubscribe();
        };
    }, []);
    const authInfo = {
        user,
        createUser,
        updateUser,
        signInUser,
        logoutUser,
        loading,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
