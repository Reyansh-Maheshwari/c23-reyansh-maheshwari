class BouncyBall{
	constructor(x,y,r)
	{
		 var options1={
	 	restitution:0.3,
			friction:5,
		 	density:1,
		 }

		//  var options2={
		//  	restitution:5,
		//  	friction:5,
		//  	density:20
		//  }

		//  var options3={
		//  	restitution:0.3,
		//  	friction:5,
		//  	density:1
		//  }

		//  var options4={
		//  	restitution:5,
		//  	friction:5,
		//  	density:20
		// }


		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options1)
		World.add(world, this.body);

		// this.body2=Bodies.circle(this.x, this.y, (this.r-20)/2, options2)
		// World.add(world, this.body);

		// this.body3=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options3)
		// World.add(world, this.body);

		
		// this.body4=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options4)
	    // World.add(world, this.body);

	}
	display()
	{
		    var bouncyBallPos=this.body.position;		
		    push()
		    translate(bouncyBallPos.x, bouncyBallPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			 ellipse(0,0,this.r, this.r);
		
			 //rect(0,0,this.r, this.r);
			 
			pop()
	}

}