import React from "react";

export const Card = () => {
	return (
		<>
<div className="card d-table" style={{minWidth: "400px"}}>
  <img src="https://i.imgur.com/y99qO61.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">description.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
	);
};
