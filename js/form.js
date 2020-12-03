 class Form{
     constructor(){

        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h2");

     }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

     display(){
            var title = createElement('h2');
            title.html('Car racing game');
            title.position(displayWidth/2-40,displayHeight/2-80);
            this.input.position(displayWidth/2+30,displayHeight/2);
            this.button.position(250,200);
            this.button.mousePressed(()=>{

                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount+=1;

                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);

                this.greeting.html("Hello "+player.name);
                this.greeting.position(displayWidth/2-70,displayHeight/4);
            }

            )

/*
            this.input.position(400,160);
            this.button.position(400,200);
            this.button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            greeting.html("hello"+ name);
            greeting.position(500,160);
         }*/
        // )
     }

 }  