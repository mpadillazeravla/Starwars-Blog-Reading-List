import React , { useState , useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";




export const Navbar = () => {
	const {store, actions} = useContext(Context);

	// puesto aqui el condicional para que ponga EMPTY si está vacio y haga el map de list si tiene elementos, porque al ponerlo en el return me daba error
	let cuantosfav =
		store.favorites.length == "0"
			? "(empty)"
			: store.favorites.map((item, i)=> {
				return (
					<li
						
						key={i}>
						{item}{" "}
						<span>
							<i
								className="fa-solid fa-trash-can " onClick={()=>actions.deletefavorito(i)}></i>
						</span>
					</li>
				);
			})

	return (
		<>
		<div className="container-fluid bg-light">
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" style= {{width: 180, height: 80}}/></span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo"> */}
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-secondary text-white text fw-bold" style={{fontSize : "14px" , paddingLeft:"3px" , borderRadius:"15%"}} >  {store.favorites.length} </span>
					</button>
					
					<ul className="dropdown-menu" style={{color:"blue"}} aria-labelledby="dropdownMenuButton1">
					{cuantosfav}
					</ul>
					</div>
				{/* </Link> */}
			</div>
		</nav>
		</div>
		</div>
		</>
	);
	}
