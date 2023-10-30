// https://usaa.udemy.com/course/making-html5-games-with-phaser-3/learn/lecture/12610172#overview
class Align {
    static scaleToGameW(object, percentage) {
        object.displayWidth=game.config.width*percentage;
        object.scaleY = object.scaleX;
    }

    static center(object) {
        object.x = game.config.width / 2;
        object.y = game.config.height / 2;
    }

    static centerX(object) {
        object.x = game.config.width / 2;
    }

    static centerY(object) {
        object.y = game.config.height / 2;
    }
}