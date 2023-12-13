import { useEffect, useState } from "react"

const useCategory=(category)=>{

    const [product,setProduct]=useState(null)
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((product)=>setProduct(product))
    }, [category])

    return [product];
    
}

export default useCategory
