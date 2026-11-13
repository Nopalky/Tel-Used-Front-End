import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function useProducts(){
    const[products,setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        async function load(){
            try{
                setLoading(true);
                setError(null);

                const res = await axios.get("https://dummyjson.com/products?limit=0");
                setProducts(res.data.products);
            }catch(e){
                setError(e.message);
            }finally{
                setLoading(false);
            }
        }

        load();
    },[])

    return {products, loading, error}
}