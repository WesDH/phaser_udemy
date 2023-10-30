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
    this.load.image("tiles", "static/levels/towerDefense_tilesheet_v2.png");
    // Tiled method, src: https://www.youtube.com/watch?v=lmJdFa3-BIo
    this.load.tilemapTiledJSON('level1', "static/levels/level1_v2.json");

    this.load.image("face", "static/images/face.png");
}


function create () {
    // Manual method:
    // let array = [[0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]];
    // const map = this.make.tilemap({ data: array, tileWidth: 64, tileHeight: 64});
    // map.addTilesetImage("tiles");
    // const layer = map.createLayer(0, "tiles", 0, 0);


    // Tiled method, src: https://www.youtube.com/watch?v=lmJdFa3-BIo
    const map = this.make.tilemap({ key: "level1", tileWidth: 64, tileHeight: 64});
    let tileset = map.addTilesetImage("towerDefense_tilesheet_v2", "tiles");
    const ground = map.createLayer("base", tileset, 0, 0);
    const path = map.createLayer("path", tileset, 0, 0);
    const start_end = map.createLayer("start_end", tileset, 0, 0);
    const props = map.createLayer("props", tileset, 0, 0);
}


function update ()
{

}