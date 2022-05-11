import { createContext , useState, useEffect} from "react";
import { onAuthStateChangedListener , createUserDocFromAuth} from "../utils/firebase/firebase";

//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null
});

//wrap it around App!
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}; //want the children nested in provider to be able to call this useState 

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => { //callback
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        }) //takes care of changing the context

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
