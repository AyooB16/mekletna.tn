import Plats from "../../json/plats.json";
import "./Panier.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function saveCart(cart) {
    if (window.localStorage)
    {
        localStorage.cart = JSON.stringify(cart);
    }
  }
  
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
            cart.map((item)=>({...Plats.find((e) => e.id === item.id),qty:item.qty}))
        )
        saveCart(cart); 
    },[cart]);
    const onRemove = (idPlat) => {
        setCart(cart.filter((x) => x.id !== idPlat));
               
  };
    const onDecrement = (idPlat) => {
        const exist = cart.find((x) => x.id === idPlat);
        if (exist.qty === 1) {
            setCart(cart.filter((x) => x.id !== idPlat));
        } 
        else {
            setCart(
                cart.map((x) =>
                x.id === idPlat ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
        
      };
      const onIncrement  = (idPlat) => {
        const exist = cart.find((x) => x.id === idPlat);
            setCart(
                cart.map((x) =>
                x.id === idPlat ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
      };
    const total = ()=>{
        let sum = 0;
        for (let i = 0; i < cartObj.length; i++) {
            sum += cartObj[i].price*cartObj[i].qty;
        }
        return sum;
    }
  return (
    <section className="pt-5 pb-5">
    <div className="container">
      <div className="row w-100">
        <div className="col-lg-12 col-md-12 col-12">
          <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
          <p className="mb-5 text-center">
            <i className="text-info font-weight-bold">{cartObj.length}</i> items in your cart</p>
          <table id="shoppingCart" className="table table-condensed table-responsive">
            <thead>
              <tr>
                <th style={{width: '60%'}}>Plat</th>
                <th style={{width: '12%'}}>Prix</th>
                <th style={{width: '20%'}}>Quantité</th>
                <th style={{width: '16%'}} />
              </tr>
            </thead>
            <tbody>
            {cartObj.map((item)=>(
                <tr key={item.id}>
                <td>
                  <div className="row">
                    <div className="col-md-3 text-left">
                      <img src={item.image[0]} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                    </div>
                    <div className="col-md-9 text-left mt-sm-2">
                      <h4>{item.namePlat}</h4>
                      <p className="font-weight-light">{item.traiteur}</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price"><h4 className="mt-2">{item.price} DT</h4></td>
                <td data-th="Quantity" className="actions " >
                    <div className="text-right d-flex">
                        <button className="btn btn-white border-secondary bg-white btn-md mb-2"onClick={()=>(onDecrement(item.id))}>
                        <i className="fas fa-minus"></i>
                        </button>
                        <h4 className="m-2">  {item.qty}  </h4>                    

                        <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={()=>(onIncrement(item.id))}>
                        <i className="far fa-plus"></i>
                        </button>
                    </div>

                </td>
                <td className="actions" data-th>
                  <div className="text-right">
                    <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={()=>(onRemove(item.id))}>
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
        ))

        }
              
            </tbody>
          </table>
          <div className="float-end text-right">
            <h4>Subtotal:</h4>
            <h1>{total()} DT</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex align-items-center">
        <div className="col-sm-6 order-md-2 text-md-end">
          <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
        </div>
        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-start">
            <Link to={"/plat"}>
          
            <i className="fas fa-arrow-left mr-2" /> Continue Shopping</Link>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Panier
