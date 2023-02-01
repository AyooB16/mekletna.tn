
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Plats from "../../json/plats.json";
function saveCart(cart) {
  if (window.localStorage)
  {
      localStorage.cart = JSON.stringify(cart);
  }
}

function addToCart (cart,setCart,idPlat){
    console.log(idPlat);
    for (var i in cart) {
      if(cart[i].id == idPlat)
      {
          cart[i].qty++;
          saveCart(cart);
          return;
      }
  }
  setCart([...cart,{ id: idPlat, qty: 1 }]);
  };

const ListPlats = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")));
        }
    },[]);
    useEffect(() => {
        saveCart(cart);
    },[cart]);
  return (

<section className="py-2">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
        {
            Plats.map((plat) => (
                    <div className="col mb-5"key={plat.id}>
                     <div className="card h-100">

                    <img className="card-img-top" src={plat.image[0]} alt={plat.namePlat} />
                    
                    <div className="card-body text-center">
                      
                      <div className="h4 text-primary text-decoration-none">{plat.namePlat}</div>
                      
                      <div className="product-price">
                        <span>Nombre de personnes: {plat.nbPersonne}</span> <br/>
                        <span className="price fw-bold ms-2">{plat.price} DT</span>
                      </div>
                    </div>
                    
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark btn-sm mt-auto"  role="button" onClick={()=>addToCart(cart,setCart,plat.id)}><i className="fas fa-shopping-cart"></i> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                
               
            ))
        }
    </div>
    </div>
    </section>
  )
}

export default ListPlats