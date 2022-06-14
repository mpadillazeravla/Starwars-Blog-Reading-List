import React , {useContext} from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";


export const Card2 = (props) => {
  const {store, actions} = useContext(Context);
  

	return (
		<>
<div className="card d-table me-5" style={{minWidth: "400px"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/" +props.id+ ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.planetname}</h5>
    <p className="card-text">Population: {props.population} <br/> Terrain: {props.terrain}</p>
    <div className="container d-flex justify-content-between">

    <Link to={"/planet_details/" + props.id} className="btn btn-outline-primary">Learn more!</Link>
    <button type="button " className = {store.favorites.includes(props.planetname) ? ("btn btn-warning") : ("btn btn-outline-warning")} onClick={()=>actions.addfavoritos(props.planetname)}>{store.favorites.includes(props.planetname) ? (
										<i className="fas fa-heart" />
									) : (
										<i className="far fa-heart" />
									)}</button>
    
  </div>
  </div>
</div>
</>
	);
};