import React , {useContext} from "react";
import "../../styles/home.css";
import { Card1 } from "../component/Card1";
import { Card2 } from "../component/Card2";
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = (props) => {
	const {store, actions} = useContext(Context);
	

	return (
	<>

	<div className="container mt-5 mb-5">
	<h1>Characters</h1>
	</div>
	<div className="overflow-scroll d-flex container " style={{width: "1500px"}}>
		{/* map que crea una carta por cada personaje que se encuentra en el GET  */}

		{store.personajes.map((item)=> <div className="card d-table me-5" style={{minWidth: "400px"}}>
  <img src="https://i.imgur.com/y99qO61.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender:  <br/> Hair Color: <br/> Eye-Color: 
    </p>
    <div className="container d-flex justify-content-between">
    <Link to="/details" className="btn btn-outline-primary">Learn more!</Link>
    <button type="button " className="btn btn-outline-warning " ><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>

</div>)}
		
	{/* <Card1 name = "Obi Wan Kenobbi" gender = "male" hcolor = "blond" eyecolor = "blue"/>
	<Card1 name = "Luke Skywalker" gender = "male" hcolor = "blond" eyecolor = "blue"/>
	<Card1 name = "C-3PO" gender = "n/a" hcolor = "n/a" eyecolor = "yellow"/>
	<Card1 name = "Darth Vader" gender = "male" hcolor = "black" eyecolor = "black"/> */}
	
	</div>
	
	<br/>
	<br/>
	<br/>

	
	<div className="container mt-5 mb-5">
	<h1>Planets</h1>
	</div>
	<div className="overflow-scroll d-flex container " style={{width: "1500px"}}>

	{store.planetas.map((item)=> <div className="card d-table me-5" style={{minWidth: "400px"}}>
  <img src="https://i.imgur.com/y99qO61.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender:  <br/> Hair Color: <br/> Eye-Color: 
    </p>
    <div className="container d-flex justify-content-between">
    <Link to="/details" className="btn btn-outline-primary">Learn more!</Link>
    <button type="button " className="btn btn-outline-warning " ><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>

</div>)}

	{/* <Card2 planetname = "Alderaan" population = "2000M" terrain = "grasslands, mountains"/>
	<Card2 planetname = "Yavin IV" population = "1000" terrain = "jungle, rainforests"/>
	<Card2 planetname = "Hoth" population = "10" terrain = "glaciers"/>
	<Card2 planetname = "Tatooine" population = "200000" terrain = "desert"/> */}

	</div>
	</>
);
}
