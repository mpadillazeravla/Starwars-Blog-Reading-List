import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => (
	<>
	
	<h1>Characters</h1>
	<div className="overflow-scroll d-flex container " style={{width: "1500px"}}>
	<Card/>
	<Card/>
	<Card/>
	<Card/>
	
	
	</div>

	<h1>Planets</h1>
	<div className="overflow-scroll d-flex container " style={{width: "1500px"}}>

	<Card/>
	<Card/>
	<Card/>
	<Card/>
	</div>
	</>
);
