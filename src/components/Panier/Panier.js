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

        let cart2=cart.map((item)=>({...Plats.find((e) => e.id === item.id),qty:item.qty}));
        let cart3=[];
         if(cart2.length>0){
           cart2.forEach((element) => {
             
             let index= cart3.findIndex(item => item.traiteur === element.traiteur);
            if(index>=0){
              cart3[index].plats.push(element)
            }
            else{
              cart3.push({traiteur:element.traiteur , plats:[element]})
            }
           });
         }
         setCartObj(cart3);
        saveCart(cart); 
    },[cart]);
    const onRemove = (idPlat) => {
        setCart(cart.filter((x) => x.id !== idPlat));
               
    };
    const onResetCart = () => {
      setCart([]);     
     };
     const submitCart = () => {
      console.log(cartObj)    
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
      const prixOrder = (item)=>{
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
          sum += item[i].price*item[i].qty;
        }
        return sum;
    }
    const total = ()=>{
        let sum = 0;
        for (let i = 0; i < cartObj.length; i++) {
          for (let j = 0; j < cartObj[i].plats.length; j++) {
            sum += cartObj[i].plats[j].price*cartObj[i].plats[j].qty;
          }
        }
        return sum;
    }
  return (
    <section className="pt-5 pb-5">
    <div className="container">
      <div className="row w-100">
        <div className="col-lg-12 col-md-12 col-12">
          <h3 className="display-5 mb-2 text-center">Panier</h3>
          <p className="mb-5 text-center">
            <i className="text-info font-weight-bold">{cartObj.length}</i> commandes dans votre panier</p>
            
            {cartObj.map((item)=>(
              <div  key={item.traiteur}>
              <p className="font-weight-light">Commande de {item.traiteur}</p>
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
              {item.plats.map((plat)=>(
                <tr key={plat.id}>
                  <td>
                    <div className="row">
                      <div className="col-md-3 text-left">
                        <img src={plat.image[0]} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                      </div>
                      <div className="col-md-9 text-left mt-sm-2">
                        <h5>{plat.namePlat}</h5>
                        <p className="font-weight-light">{plat.traiteur}</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price"><h5 className="mt-2">{plat.price} DT</h5></td>
                  <td data-th="Quantity" className="actions " >
                      <div className="text-right d-flex">
                          <button className="btn btn-white border-secondary bg-white btn-md mb-2"onClick={()=>(onDecrement(plat.id))}>
                          <i className="fas fa-minus"></i>
                          </button>
                          <h5 className="m-2">  {plat.qty}  </h5>                    

                          <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={()=>(onIncrement(plat.id))}>
                          <i className="far fa-plus"></i>
                          </button>
                      </div>

                  </td>
                  <td className="actions" data-th>
                    <div className="text-right">
                      <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={()=>(onRemove(plat.id))}>
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </td>
                </tr>
                ))
              }
              <tr >
                <td colSpan={5}>          
                  <div className="d-flex justify-content-around">
                    <h6>Sous-total commande:</h6>
                    <h5>{prixOrder(item.plats)} DT</h5>
                  </div> 
                  <div className="d-flex justify-content-around">
                    <h6>Frais de livraison:</h6>
                    <h5>2 DT</h5>
                  </div> 
                  <div className="d-flex justify-content-around">
                    <h6>Total commande:</h6>
                    <h5>{prixOrder(item.plats)+2} DT</h5>
                  </div>  
                </td>
              </tr>
              </tbody>
          </table>
          </div>
        ))

        }
              

          <div className="float-center text-center">
            <h4>Total :</h4>
            <h1>{total()+cartObj.length*2} DT</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex align-items-center">
        <div className="col-sm-6 order-md-2 text-md-end">
          <button className="btn btn-warning ms-4 mb-2 btn-sg ps-5 pe-5" onClick={onResetCart}>Vider panier</button>
          <button className="btn btn-primary ms-4 mb-2  btn-sg ps-5 pe-5" onClick={submitCart}>Checkout</button>
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
