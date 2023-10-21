from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template("first_game.html")

# Based off of http://phaser.io/tutorials/making-your-first-phaser-3-game/
@app.route("/first_game")
def first_game():
    return render_template("first_game.html")

# Based off of http://phaser.io/tutorials/making-your-first-phaser-3-game/
@app.route("/rr")
def road_rush():
    return render_template("roadrush.html")

# Based off of https://phaser.io/tutorials/getting-started-phaser3/part5
@app.route("/phaser53")
def phaser3p5():
    return render_template("phaser3p5.html")


# Based off of https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
@app.route("/phaserio_firstgame")
def phaserio_firstgame():
    return render_template("phaserio_firstgame.html")

# Based off of https://www.youtube.com/watch?v=lmJdFa3-BIo
@app.route("/tile_map_test")
def tile_map_test():
    return render_template("tile_map_test.html")

# Based off of https://www.youtube.com/watch?v=lmJdFa3-BIo
@app.route("/tile_map_poc")
def tile_map_poc():
    return render_template("tile_map_poc.html")

# @app.route("/super-mario")
# def super_mario():
#     return render_template("super_mario.html")


if __name__ == '__main__':
    app.run(debug=True)
