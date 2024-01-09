import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create a password-based account
    const registerUserWithEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in a user with an email address and password
    const logInWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authentication = { isLoading, user, registerUserWithEmailAndPassword, logInWithEmailAndPassword, signInWithGoogle, signInWithGithub }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;