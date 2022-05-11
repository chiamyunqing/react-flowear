import { createContext, useState , useEffect} from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const ProductContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setProducts(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = {products};
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
