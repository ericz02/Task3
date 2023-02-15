import { useState, useEffect } from "react";
import products from "./ListProduct";

const ProductSort = () => {
    const [eProducts, setEProducts] = useState([]);
    const [direction, setDirection] = useState("ascending");

    useEffect(() => {
        sortProds();
    }, []);

    const sortProds = () => {
        if (direction === "ascending") {
        products.sort((a, b) => a.price - b.price);
        setEProducts(products.map((a) => a.name));
        setDirection("descending");
        } 
        else {
        products.sort((a, b) => b.price - a.price);
        setEProducts(products.map((b) => b.name));
        setDirection("ascending");
        }
    };

    return (
        <div className="text-center">
        <p> The products sorted by price in ascending order are: </p>
        <p>{eProducts.join(", \n ")} </p>
        <br></br>
        <button onClick={sortProds} className = "w-full h-full px-5 py-3 rounded-lg bg-blue-100 bg-gray-700 text-white">
            Resort Order</button ><small className="w-full h-full px-20 py-1 rounded-lg bg-red-700 text-white">Current direction: {direction}</small>
        </div>
    );
    };

export default ProductSort;
