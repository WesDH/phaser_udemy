class Road extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene=config.scene;
        this.back = this.scene.add.image(0, 0, "road");

        this.add(this.back);
        this.scene.add.existing(this);

        //this.back.displayWidth=game.config.width*.5;
        this.back.scaleY=this.back.scaleX;
        Align.scaleToGameW(this.back, 0.5);


        this.setSize(this.back.displayWidth, game.config.height);
        //console.log(this);

        this.lineGroup = this.scene.add.group();
        this.count = 0;


        // Display width of road (x) is 240, but its -120 to 120
        // thus, the "left half" of the road goes from -120 to 0
        //       the "right half" goes from 0 to 120
        // dividing the width by 4, we place the car at either at x=60 or x=-60
        // which corresponds to the center right or center left lanes
        this.car = this.scene.add.sprite(
            this.displayWidth / 4,
            game.config.height * .9,
            "cars");
        Align.scaleToGameW(this.car, .10);
        this.add(this.car);

        //add click
        this.back.setInteractive();
        this.back.on('pointerdown', this.changeLanes.bind(this));

        this.addObject(this);


    }
    addObject() {
        let objs=[
            {key: "pcar1", speed: 4, scale: 10},
            {key: "pcar2", speed: 10, scale: 10},
            {key: "barrier", speed: 21, scale: 8},
            {key: "cone", speed: 21, scale: 5}
        ];

        let index = Math.floor(Math.random()*4);
        let key = objs[index].key;
        let speed = objs[index].speed;
        let scale = objs[index].scale / 100;

        let random_bool = Math.random() < 0.5;
        let lane = this.displayWidth/4;
        if (random_bool === true) {
            lane = -this.displayWidth/4
        }
        this.object=this.scene.add.sprite(lane, 0, key);
        this.object.speed=speed;

        Align.scaleToGameW(this.object, scale);
        this.add(this.object);
    }
    moveObject() {
        this.object.y+=this.vSpace / this.object.speed;
        if (this.object.y > game.config.height) {
            this.object.destroy();
            this.addObject(this);
        }
    }
    changeLanes() {
        this.car.x = -this.car.x;
    }

    makeLines() {
        this.vSpace = this.displayHeight / 10;
        for (let i = 0; i < 10; i++) {
            let line = this.scene.add.image(this.x, this.vSpace * i, "line");
            line.original_y = line.y
            this.lineGroup.add(line);
        }
    }
    moveLines() {
        this.lineGroup.children.iterate(function(child) {
            child.y += this.vSpace / 20;
        }.bind(this));
        this.count++;
        if (this.count > 20) {
            this.count = 0;
            this.lineGroup.children.iterate(function(child) {
                child.y = child.original_y;
            }.bind(this));
        }
    }

}