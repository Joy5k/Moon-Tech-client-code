import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
// import './Home.css'
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
      })
        
  }, [])
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <div>

      <h1>This is home page</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
     {/* below the   Array.isArray(products) && is optional.The function check if the products is array then execute the map.And   Array.isArray(products) && code I don't give then the products isnot array I will get the error"products.map is not function" */}
        {
  Array.isArray(products) && products.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
}

      </div>
   </div>
  );
};

export default Home;
