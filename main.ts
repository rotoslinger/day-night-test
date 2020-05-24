namespace SpriteKind {
    export const playter = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
. 5 5 . . 5 5 5 f 5 5 . . 5 5 . 
. 5 5 . . 5 5 5 f 5 5 . . 5 5 . 
. 5 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
. . . . . 5 5 f f f 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -110
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    info.changeScoreBy(1)
    mySprite2.setPosition(79, 106)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
mySprite2 = sprites.create(img`
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 0)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000200000000000000000001010000000000000000000000010101000000000000000000000001000000000101010101000000000100000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
2 2 . . . . . . . . 
. . . 2 2 2 . . . . 
. . . . . . . 2 . . 
. . 2 2 2 2 2 . . . 
. 2 . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,myTiles.tile2],
            TileScale.Sixteen
        ))
mySprite2.setPosition(79, 106)
mySprite2.ay = 200
forever(function () {
    pause(120000)
    color.FadeToBlack.startScreenEffect()
    pause(2000)
    scene.setBackgroundColor(15)
    color.startFade(color.Black, color.originalPalette)
    pause(120000)
    color.FadeToWhite.startScreenEffect()
    pause(2000)
    scene.setBackgroundColor(9)
    color.startFade(color.White, color.originalPalette)
})
