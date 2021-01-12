


leftrectangle=createSprite(400,610,20,100);
	leftrectangle.shapeColor="red";
	leftbody=  Bodies.rectangle(400, 610, 20, 100 , {isStatic:true} );
	World.add(world, leftbody);
	
	rightrectangle=createSprite(550,610,20,100);
	rightrectangle.shapeColor="red";
	rightbody=  Bodies.rectangle(550, 610, 20, 100 , {isStatic:true} );
	World.add(world, rightbody);

	bottomrectangle=createSprite(480,650,150,20);
	bottomrectangle.shapeColor="red";
	bottombody=  Bodies.rectangle(480, 650, 150,20 , {isStatic:true} );
	World.add(world, bottombody);