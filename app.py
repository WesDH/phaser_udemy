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
    return render_template("road_rush.html")

# Based off of https://phaser.io/tutorials/getting-started-phaser3/part5
@app.route("/phaser5")
def phaser3p5():
    return render_template("phaser3p5.html")

# @app.route("/super-mario")
# def super_mario():
#     return render_template("super_mario.html")


if __name__ == '__main__':
    app.run(debug=True)
