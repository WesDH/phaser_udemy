class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds
        this.load.baseURL = "/static/road_rush/";
        this.load.image("road", "images/road.jpg");
        this.load.spritesheet("cars", "images/cars.png", {frameWidth :'60px', frameHeight: '126px'});
    }
    create() {
       //define our objects
        let road = new Road({scene: this});
    }
    update() {
        //constant running loop
    }

}