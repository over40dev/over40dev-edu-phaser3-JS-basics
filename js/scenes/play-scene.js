class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  create() {
    const { width, height } = this.sys.game.config;

    this.bg = this.add.sprite(width / 2, height / 2, 'background');
    this.player = this.add.sprite(width / 4, height / 2, 'player');
    this.enemy1 = this.add.sprite(350, 250, 'enemy');
    this.enemy2 = this.add.sprite(450, 350, 'enemy');

    this.bg.depth = -1;
    this.player.depth = 1;
    this.enemy1.depth = 1;
    this.enemy2.depth = 1;
  }

  // update runs 60 times per second
  update() {
    let
      gameW = this.sys.game.config.width;

    if (this.player.scaleX < 2) {
      this.player.scaleX += 0.01;
      this.player.scaleY += 0.01;
      this.player.x += 0.5;
    } else {
      this.player.scaleX = 0.1;
      this.player.scaleY = 0.1;
      this.player.x = -0.5;

    }

    if (this.enemy1.x < gameW + .5) {
      this.enemy1.x += 0.5;
      this.enemy1.rotation += .05;
    } else {
      this.enemy1.x = -0.5;
    }
    if (this.enemy2.scaleX < 2) {
      this.enemy2.scaleX += 0.05;
      this.enemy2.scaleY += 0.05;
      this.enemy2.x += 0.5;
    } else {
      this.enemy2.flipY = true;
      this.enemy2.setAngle(-45);
    }
  }
}