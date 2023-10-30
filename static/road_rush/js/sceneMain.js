class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds
        this.load.baseURL = "/static/road_rush/";
        //this.load.image("face", "images/face.png");
        this.load.image("road", "images/road.jpg");
        this.load.image("line", "images/line.png");
        this.load.spritesheet("cars", "images/cars.png", {frameWidth :60, frameHeight: 126});

        // Load obtacles
        this.load.image("pcar1", "images/pcar1.png");
        this.load.image("pcar2", "images/pcar2.png");
        this.load.image("barrier", "images/barrier.png");
        this.load.image("cone", "images/cone.png");

    }
    create() {
       //define our objects
        this.road = new Road({scene: this});
        this.road.x = game.config.width/2;
        this.road.makeLines();
    }
    update() {
        //constant running loop
        this.road.moveLines();
        this.road.moveObject();
    }

}