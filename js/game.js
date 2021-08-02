class Game {
    constructor() {


    }

    getState() {
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref("/").update({
            Gamestate: state
        })
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
    }


    play() {
        form.hide();

        background("white")
        Player.getplayerinfo();




        if (allPlayers !== undefined) {


            var index = 0, x = 0, y;


            for (var plr in allPlayers) {

                index = index + 1;
                x = x + 200;
                y = height - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = width / 2;
                    camera.position.y = cars[index - 1].y;

                } else {
                    cars[index - 1].shapeColor = "blue";
                }


            }
        }

        if (keyDown("UP_ARROW") && player.index !== null) {
            player.distance += 50;
            player.update();
        }

        drawSprites();

    }
}