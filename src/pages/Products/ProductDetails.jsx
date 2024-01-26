import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getProductsByID } from '../../Ations/ProductActin';



const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getProductsByID(id).then(res=>{
            setProductDetails(res.data.response)
        }).catch(err=>console.log(err))
    }, [])
    
  return (
    <div>{JSON.stringify(productDetails)}</div>
  )
}

export default ProductDetails