class PhaserGame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [BootScene, PlayScene],
};

let game = new PhaserGame(config);
