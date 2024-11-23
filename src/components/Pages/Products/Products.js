import "./Products.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//  function Products() {
//   const [ Products,setProducts] =UseState ([])

//   useEffect(() =>
// {
//   getProducts()
// },[]);

// function getProducts(){
//   try{
//     const response = await fetch("https://dummyjson.com/products");
//     const result = await response.json();
//     if (  result && result.Products )
//     {
//       setProducts(result.Products);
//       console.log(result.Products);
//     }

//   }
//   catch(error){
//     alert(error);
//   }
// }

//   return (
//     <div className="container">
//       <div className="header">Products</div>
//       <div className="content">Products List</div>
//     </div>
//   );
// }

//  export default Products;

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json.products))
      .catch((err) => alert(err));
  }, []);

  function handleDetails() {
    navigate("/produtDetails");
  }

  return (
    <div className="container">
      <div className="header">Products</div>
      <div className="content">
        Products List
        <div className="products">
          {products &&
            products.length > 0 &&
            products.map((item) => {
              return (
                <>
                  <div className="col" onClick={handleDetails}>
                    <img src={item.images[0]}></img>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
