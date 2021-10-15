import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

// LOADING ASSESTS  Such ass imagesss, animation  ...
function preload() {
  // this context - scene
  // contains functions and properties we can use
  this.load.image("sky", "assets/sky.png");
  /// middle of height ,  1/10 width
  this.load.image("bird", "assets/bird.png");
}
let bird = null;
function create() {
  // this.add.image(0, 0, 'sky').setOrigin(0, 0);
  this.add.image(0, 0, "sky").setOrigin(0);
  // middle of the height , 1/10 width
  bird = this.add
    .sprite(config.width * 0.1, config.height / 2, "bird")
    .setOrigin(0);
  debugger;
  bird = this.physics.add
    .sprite(config.width * 0.1, config.height / 2, "bird")
    .setOrigin(0);

  bird.body.gravity.y = 200;
}

// 60fps
// 60 times per second
// 60 * 16ms = 1000ms
function update(time, delta) {
  console.log(bird.body.velocity.y);
}
new Phaser.Game(config);
