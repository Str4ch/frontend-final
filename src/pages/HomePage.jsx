import React from "react";
import { useState } from "react";

const HomePage = () => {
    const [ product, setProduct ] = useState([])
    return (
        <div>
        <h1 className="text-center">App</h1>
        <p>{!product.length && "no products yet."}</p>
        </div>
      )
}

export default HomePage