class Form {
    constructor() {
        this.title = createElement("h2");
        this.input = createInput("Enter your name");
        this.button = createButton("start");
        this.greeting = createElement("h4");
    }


    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
    }


   
    display() {

        this.title.html("Car Racing Game");
        this.title.position(width/2 - 50, 0);


        this.input.position(width/2-50,height/2);

        this.button.position(width/2, height/2 + 50);

        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(width/2 - 50,height/2);
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }

}