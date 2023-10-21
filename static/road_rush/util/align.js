class Align
{
    static scaleToGameW(object, percentage)
    {
        object.displayWidth=game.config.width*percentage;
        object.scaleY = object.scaleX;
    }
}