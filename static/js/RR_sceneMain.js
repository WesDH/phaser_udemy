class RR_SceneMain extends Phaser.Scene {
    constructor() {
        super('RR_SceneMain');
    }
    preload() {
        this.load.image("face", "static/images/face.png");
    }
    create() {

        this.face = this.add.image(game.config.width / 2, game.config.height / 2, "face");
        this.face.angle = 25;

        this.face.setInteractive();


        var textConfig={fontSize:'20px',color:'#ff0000',fontFamily: 'Arial'};

        this.title=this.add.text(game.config.width/2,game.config.height*.75,"HELLO PHASER!!!",textConfig);

        //setOrigin() replaces anchor.set()
        //sprites now default to orign 0.5 for both x and y
        this.title.setOrigin(0.5,0.5);

       //this will listen for a down event
       //on every object that is set interactive
       this.input.on('gameobjectdown',this.onObjectClicked);
        
    }
    onObjectClicked(pointer,gameObject)
    {
        gameObject.angle+=10;
    }
    update() {}
}