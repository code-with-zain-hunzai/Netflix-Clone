import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: "AIzaSyCcIMUECGLs3jgY8Bn6EBB7EnP7fWANSWM",
    authDomain: "netflix-clone-2c006.firebaseapp.com",
    projectId: "netflix-clone-2c006",
    storageBucket: "netflix-clone-2c006.appspot.com",
    messagingSenderId: "867736539827",
    appId: "1:867736539827:web:bf96e679e37d610fe056c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.success(error.code.split('/')[1].split('-').join(""));
    }
};

const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, login, signup, logout };
