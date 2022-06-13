import React , {useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import propTypes from "prop-types";
import { Context } from "../store/appContext";


export const DetailsCharacters = (props) => {
	const {store, actions} = useContext(Context);
	const {theid} = useParams();
	console.log(theid)

	useEffect(() => {
	actions.getids(theid)
	}, [])


return (
	<>
<div className="container">
  <div className="card border-0"> 
	<div className="row">
	  <div className="col">
		<img src={"https://starwars-visualguide.com/assets/img/characters/" +theid+ ".jpg"} className="img-fluid rounded-start" alt="OWK y Baby Yoda"/>
	  </div>
	  <div className="col">
		<div className="card-body">
		  <h1 className="card-title " style= {{color:"black" , textAlign: "center"}}>{store.getids.name}</h1>
		  <p className="card-text" style= {{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sagittis nulla, ac egestas turpis. Nullam justo neque, sodales quis nisl eget, fringilla commodo justo. Nunc dignissim massa et varius ornare. Nam eget metus purus. Integer gravida ipsum quis arcu venenatis aliquet. Quisque blandit enim eu tellus dapibus lobortis id ornare dui. Aenean vitae ex nec nibh imperdiet tristique. Praesent sed dolor non leo iaculis tempus. Nulla et turpis at justo venenatis efficitur at at mauris. Mauris nisl arcu, feugiat vel erat scelerisque, efficitur laoreet enim. Suspendisse potenti. Donec efficitur lectus ut maximus lacinia. Duis tincidunt lacinia iaculis. Aenean laoreet luctus placerat. Aliquam odio nisl, euismod sit amet scelerisque in, bibendum nec ligula. Fusce rutrum massa vitae efficitur ultricies. Proin quis vulputate ligula, non interdum velit. Curabitur eget justo elit. Quisque accumsan dictum lectus, quis volutpat justo vulputate non. Phasellus lobortis, velit at ultricies vehicula, erat leo faucibus ante, eu tincidunt dui ligula in turpis. Proin sit amet imperdiet lectus, sit amet porta est. Ut id lectus massa. Vestibulum sed dolor et nunc sollicitudin molestie. Morbi a dui justo. Proin nibh nunc, ornare ac ante ac, molestie tempus nisl.</p>
		</div>
	  </div>
	</div>
  </div>
  <hr style={{height: "2px", opacity:"1"}}/>

  <div className="container d-flex justify-content-between" style= {{color:"red"}}>
  <div className="col">
  Name
</div>
<div className="col">
  Birth Year
</div>
<div className="col">
  Gender
</div> <div className="col">
  Height
</div>
<div className="col">
  Skin Color
</div>
<div className="col">
Eye Color
</div>
</div>
<div className="container d-flex justify-content-between" style= {{color:"red"}}>
  <div className="col">
  {store.getids.name}
</div>
<div className="col">
  {store.getids.birth_year}
</div>
<div className="col">
  {store.getids.gender}
</div> <div className="col">
  {store.getids.height}
</div>
<div className="col">
 {store.getids.skin_color}
</div>
<div className="col">
  {store.getids.eye_color}
</div>
</div>
</div>
</>
);
};
