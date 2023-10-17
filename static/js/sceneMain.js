class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // load images or sounds

        this.load.image("face", "static/images/face.png");
        this.load.spritesheet('boy', 'static/images/boy.png', { frameWidth: 120, frameHeight: 200 });

        // Groups
        this.load.image("apple", "static/images/apple.png");

        // Audio
        this.load.audio('cat', ['static/audio/meow.mp3', 'static/audio/meow.ogg']);
    }
    create() {
        // Define our objects such as spaceships or bullets

        let appleCon = this.add.container();
        //let appleGroup = this.add.group();

        // Apple group:
        for (let i=0; i < 5; i++) {
            let xx = Phaser.Math.Between(100, 400);
            let yy = Phaser.Math.Between(100, 400);
            let apple = this.add.image(xx, yy, "apple");
            console.log(i);
            appleCon.add(apple);
        }
        testObj = appleCon;


        //define objects

        this.catSound = this.sound.add('cat');
        this.catSound.play();

        //usual way to add images
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(8, 0xff0000);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(100, 300);
        this.graphics.strokePath();


        this.graphics.strokeRect(100, 200, 50, 50);

        this.graphics.fillStyle(0xff00ff, 0.5);
        this.graphics.strokeCircle(100, 300, 60);
        this.graphics.fillCircle(100, 300, 60);


        //console.log("Ready!");


        this.face = this.add.image(100, 100, "face");
        this.face.setOrigin(0, 0);  // 0.0 to 1.0, default 0.5
        this.face.displayWidth=100;
        this.face.scaleY=this.face.scaleX;
        this.face.setInteractive();
        this.face.on('pointerdown', this.onDown.bind(this));
        this.face.on('pointerup', this.onUp.bind(this));


        this.char = this.add.sprite(0, game.config.height/2, "boy");
        let frameNames = this.anims.generateFrameNumbers('boy');


        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 5,
            repeat: -1
        });
        // this.anims.create({
        //     key: 'walk',
        //     frames: [
        //         {key: 'boy', frame: 0},
        //         {key: 'boy', frame: 1},
        //         {key: 'boy', frame: 2},
        //         {key: 'boy', frame: 3},
        //         {key: 'boy', frame: 4},
        //         {key: 'boy', frame: 5},
        //     ],
        //     frameRate: 3,
        //     repeat: -1
        // });

        this.char.play('walk');
        //this.face.setOrigin(0,0)


        this.doWalk();
        // this.face.x=game.config.width/2;
        // this.face.y=game.config.height/2;

        this.text1=this.add.text(200,300, "Hello!", {fontFamily: 'Indie Flower', color: '#00FF00', fontSize: '40px'})
        this.text1.setOrigin(0.5, 0.5);
    }
    onDown()
    {
        //console.log("complete!");
        this.face.alpha = .5;
    }
    onUp()
    {
        //console.log("complete!");
        this.face.alpha = 1.;
    }
    doWalk()
    {
        this.tweens.add({
            targets: this.char,
            duration: 5000,
            x: game.config.width,
            y: game.config.height,
            alpha:0,
            onComplete: this.onCompleteHandler.bind(this)
            //onCompleteParams: [this]
        });
    }

    onCompleteHandler(tween, targets, scope) {
        console.log(targets);
        let char = targets[0];
        char.x = 0;
        char.y=game.config.height/2;
        char.alpha = 1;
        //console.log(targets)

        this.doWalk();
    }
    update() {
        // Constant running loop.


        // this.char.x++;
        // if (this.char.x>game.config.width) {
        //     this.char.x = 0;
        // }
    }
}