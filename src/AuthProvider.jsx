import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authentication = { name: 'nazmul' }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;