import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";



export const Card1 = () => {
  const {store, actions} = useContext(Context);
  
	return (
		<>
<div className="card d-table me-5" style={{minWidth: "400px"}}>
  <img src="https://i.imgur.com/y99qO61.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Gender:  <br/> Hair Color: <br/> Eye-Color: 
    </p>
    <div className="container d-flex justify-content-between">
    <Link to="/details" className="btn btn-outline-primary">Learn more!</Link>
    <button type="button " className="btn btn-outline-warning " ><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>

</div>
</>
	);
};

