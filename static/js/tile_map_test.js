/*

    Finished 10/19/2023
    https://phaser.io/tutorials/making-your-first-phaser-3-game/part10
*/

/*jshint esversion: 6 */
import Align from "/static/js/utils/align.js";
import { AlignGrid } from "/static/js/utils/alignGrid.js";
import { UIBlock } from "/static/js/utils/UIBlock.js";

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 768,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image("tiles", "static/levels/towerDefense_tilesheet.png");
    // Tiled method, src: https://www.youtube.com/watch?v=lmJdFa3-BIo
    this.load.tilemapTiledJSON('level1', "static/levels/testmap2.json");

    this.load.image("face", "static/images/face.png");
}

// var platforms;

function create ()
{
    // Manual method:
    // let array = [[0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]];
    // const map = this.make.tilemap({ data: array, tileWidth: 64, tileHeight: 64});
    // map.addTilesetImage("tiles");
    // const layer = map.createLayer(0, "tiles", 0, 0);


    // Tiled method, src: https://www.youtube.com/watch?v=lmJdFa3-BIo
    const map = this.make.tilemap({ key: "level1", tileWidth: 64, tileHeight: 64});
    const tileset = map.addTilesetImage("towerDefense_tilesheet", "tiles");
    const ground = map.createLayer("base_layer", tileset, 0, 0);
    const overlay = map.createLayer("overlayed_props", tileset, 0, 0);

    this.player = this.physics.add.sprite(100, 100, "face");

    Align.scaleToGameW(this.player,0.16,this);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, overlay);
    overlay.setCollisionBetween(130, 138);
}


function update ()
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);
    if (this.cursors.up.isDown === true) {
        this.player.setVelocityY(-100);
    }
    if (this.cursors.down.isDown === true) {
        this.player.setVelocityY(100);
    }
    if (this.cursors.left.isDown === true) {
        this.player.setVelocityX(-100);
    }
    if (this.cursors.right.isDown === true) {
        this.player.setVelocityX(100);
    }
}