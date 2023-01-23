import Plats from "../../json/plats.json";
import { useEffect, useState } from "react";
const Panier = () => {
    const [cart, setCart] = useState([]);
    const [cartObj, setCartObj] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("cart")){
            setCart(JSON.parse(localStorage.getItem("cart")));
        }
    },[]);
    useEffect(() => {
        setCartObj(
            cart.map((item)=>(
               Plats.find((e) => e.id === item.id)
            ))
        )
    },[cart]);
  return (
    <div>
        {cartObj.map((item)=>(
            <div key={item.id}>
                {item.id}
                {item.namePlat}
                {item.price}

            </div>
        ))

        }
        
    </div>
  );
}

export default Panier
