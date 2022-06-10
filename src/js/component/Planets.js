import React from "react";

export const Planets = () => {
	return (
		<>
    <div className="container">
        <div className="card border-0" >
          <div className="row">
            <div className="col">
              <img src="https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg" className="img-fluid rounded-start" alt="Tatooine"/>
            </div>
            <div className="col">
              <div className="card-body">
              <h1 className="card-title " style= {{color:"black" , textAlign: "center"}}>Tatooine </h1>
              <p className="card-text" style= {{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sagittis nulla, ac egestas turpis. Nullam justo neque, sodales quis nisl eget, fringilla commodo justo. Nunc dignissim massa et varius ornare. Nam eget metus purus. Integer gravida ipsum quis arcu venenatis aliquet. Quisque blandit enim eu tellus dapibus lobortis id ornare dui. Aenean vitae ex nec nibh imperdiet tristique. Praesent sed dolor non leo iaculis tempus. Nulla et turpis at justo venenatis efficitur at at mauris. Mauris nisl arcu, feugiat vel erat scelerisque, efficitur laoreet enim. Suspendisse potenti. Donec efficitur lectus ut maximus lacinia. Duis tincidunt lacinia iaculis. Aenean laoreet luctus placerat. Aliquam odio nisl, euismod sit amet scelerisque in, bibendum nec ligula. Fusce rutrum massa vitae efficitur ultricies. Proin quis vulputate ligula, non interdum velit. Curabitur eget justo elit. Quisque accumsan dictum lectus, quis volutpat justo vulputate non. Phasellus lobortis, velit at ultricies vehicula, erat leo faucibus ante, eu tincidunt dui ligula in turpis. Proin sit amet imperdiet lectus, sit amet porta est. Ut id lectus massa. Vestibulum sed dolor et nunc sollicitudin molestie. Morbi a dui justo. Proin nibh nunc, ornare ac ante ac, molestie tempus nisl.</p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{height: "2px", opacity:"1"}}/>


        <div class="container d-flex justify-content-between" style= {{color:"red"}}>
      <div class="col">
      Name
    </div>
    <div class="col">
      Climate
    </div>
    <div class="col">
     Population
    </div> <div class="col">
      Orbital Period
    </div>
    <div class="col">
      Rotation Period
    </div>
    <div class="col">
    Diameter
    </div>
    </div>
    <div class="container d-flex justify-content-between" style= {{color:"red"}}>
      <div class="col">
      Tatooine
    </div>
    <div class="col">
      arid
    </div>
    <div class="col">
      200000
    </div> <div class="col">
      304
    </div>
    <div class="col">
     23
    </div>
    <div class="col">
      10465
    </div>
    </div>
    </div>
</>
	);
};
