import React from "react";

export const Characters = () => {
	return (
		<>
    <div className="container">
      <div className="card border-0"> 
        <div className="row">
          <div className="col">
            <img src="https://indiehoy.com/wp-content/uploads/2020/01/obi-wan-kenobi-baby-yoda.jpg" className="img-fluid rounded-start" alt="OWK y Baby Yoda"/>
          </div>
          <div className="col">
            <div className="card-body">
              <h1 className="card-title " style= {{color:"black" , textAlign: "center"}}>Luke Skywalker </h1>
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
      Birth Year
    </div>
    <div class="col">
      Gender
    </div> <div class="col">
      Height
    </div>
    <div class="col">
      Skin Color
    </div>
    <div class="col">
    Eye Color
    </div>
    </div>
    <div class="container d-flex justify-content-between" style= {{color:"red"}}>
      <div class="col">
      Luke Skywalker
    </div>
    <div class="col">
      19BBY
    </div>
    <div class="col">
      male
    </div> <div class="col">
      172
    </div>
    <div class="col">
     fair
    </div>
    <div class="col">
      blue
    </div>
    </div>
    </div>
</>
	);
};
