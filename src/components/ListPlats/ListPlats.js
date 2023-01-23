

import { Container } from "@mui/material";
import Plats from "../../json/plats.json";
function addToCart (idPlat){
    console.log(idPlat)
  };
const ListPlats = () => {
  return (
    <Container >
    <div className="row row-cols-2 row-cols-md-4 g-4 card-group">
        {
            Plats.map((plat) => (
                <div className="col" key={plat.id}>
                <div className="card h-100">
                <img src={plat.image[0]} className="card-img-top" alt={plat.namePlat}/>
                <div className="card-body">
                    <h5 className="card-title">{plat.namePlat}</h5>
                    <p className="card-text">                    
                        <span>Categorie: {plat.category}</span><br/>
                        <span>Type du plat: {plat.type}</span> <br/>
                        <span>Nombre de personnes: {plat.nbPersonne}</span> <br/>
                        <span>Prix: {plat.price} DT</span> <br/>
                    </p>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm" onClick={addToCart(plat.id)}>Ajouter au panier</button>
                    </div>
                    
                </div>
               
            ))
        }
    </div>
    </Container>
  )
}

export default ListPlats