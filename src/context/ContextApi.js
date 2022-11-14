import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => { 
    const [products, setProducts] = useState([]);
  

    return (
        <GlobalContext.Provider
            value={{
                products, setProducts
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};