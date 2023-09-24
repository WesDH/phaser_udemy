let game, config;

window.onload=function() {
    let isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile === -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    if (isMobile === -1) {
        config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'phaser-game',
            scene: [RR_SceneMain]
        };
    } else {
        config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            scene: [RR_SceneMain]
        };
    }
    game = new Phaser.Game(config);
}
