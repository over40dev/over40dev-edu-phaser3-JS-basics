class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('background', '/assets/background.png');
    this.load.image('player', '/assets/player.png');
    this.load.image('enemy', '/assets/dragon.png');
    this.load.image('prize', '/assets/treasure.png');
  }

  create() {
    this.scene.start('PlayScene');
  }
}