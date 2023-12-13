import { useEffect } from "react"
import { useState } from "react"

const useFetch=()=>{
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return [data]

}

export default useFetch