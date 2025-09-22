class Player {
  health;
  turn;
  rage;

  constructor() {
    this.health = 100;
    this.turn = 0;
    this.rage = 0;
  }
}

export class Game {
  /**
   * The gerbil player entity.
   * @type {Object}
   */

  gerbil;
  /**
   * The evil hand player entity.
   * @type {Object}
   */
  evilHand;

  /**
   * Enumeration of all possible game status.
   * @type {string}
   */
  static status = Object.freeze({
    LOADING: "loading",
    PLAYING: "playing",
    GERBIL_TURN: "gerbil_turn",
    EVIL_HAND_TURN: "evil_hand_turn",
    PAUSED: "paused",
    VICTORY: "victory",
    DEFEAT: "defeat",
  });

  state;

  constructor() {
    this.gerbil = new Player();
    this.evilHand = new Player();
    this.state = Game.status.LOADING;
  }

  *timeForward() {
    // while (this.state === Game.status.PLAYING) {
    while (true) {
      console.log("Time is moving forward...");

      if (this.gerbil.turn >= 100) {
        console.log("Gerbil's turn!");
        this.state = Game.status.GERBIL_TURN;
        this.gerbil.turn -= 100;
        yield this.state;
      }
      if (this.evilHand.turn >= 100) {
        console.log("Evil hand's turn!");
        this.state = Game.status.EVIL_HAND_TURN;
        this.evilHand.turn -= 100;
        yield this.state;
      }
      this.gerbil.turn += 10;
      this.evilHand.turn += 10;
      yield this.state;
    }
  }
}
