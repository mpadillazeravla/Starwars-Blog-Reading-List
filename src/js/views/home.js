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

		{store.personajes.map((item, index)=> <Card1 name={item.name} gender={item.gender} hair={item.hair_color} eye={item.eye_color} id={index+1}/>)}
		
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

	{store.planetas.map((item, index)=> <Card2 planetname={item.name} population={item.population} terrain={item.terrain} id={index+1}/>)}

	{/* <Card2 planetname = "Alderaan" population = "2000M" terrain = "grasslands, mountains"/>
	<Card2 planetname = "Yavin IV" population = "1000" terrain = "jungle, rainforests"/>
	<Card2 planetname = "Hoth" population = "10" terrain = "glaciers"/>
	<Card2 planetname = "Tatooine" population = "200000" terrain = "desert"/> */}

	</div>
	</>
);
}

