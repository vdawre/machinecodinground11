import React, { useContext, useState } from "react";
import { movies } from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [ db, setDb ] = useState(movies)
    const [ query, setQuery ] = useState("")
    const [ wishlistData, setWishlistData ] = useState([])
    const [ starredData, setStarredData ] = useState([])
    
return <AppContext.Provider value={{db, setDb, query, setQuery, wishlistData, setWishlistData, starredData, setStarredData}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};