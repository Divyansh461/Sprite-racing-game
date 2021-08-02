class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  update() {
    var playerindex = "players/player" + this.index;
    database.ref(playerindex).set({
      name: this.name,
      distance: this.distance,
    })
  }

  static getplayerinfo() {
    var inforef = database.ref("players");
    inforef.on("value", function (data) {
      allPlayers = data.val();
    })
  }


  getCount() {
    var playercountref = database.ref("Playercount");
    playercountref.on("value", function (data) {
      playerCount = data.val();
    })
  }

  updateCount(count) {

    database.ref("/").update({
      Playercount: count,
    })






  }

}