function feliz () {
    servos.P1.setAngle(15)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    OLED12864_I2C.clear()
    OLED12864_I2C.zoom(true)
    OLED12864_I2C.rect(
    0,
    0,
    60,
    30,
    1
    )
    OLED12864_I2C.rect(
    15,
    15,
    45,
    25,
    1
    )
    for (let index = 0; index <= 8; index++) {
        OLED12864_I2C.hline(
        15,
        16 + index,
        30,
        1
        )
    }
    servos.P1.setAngle(165)
    for (let index = 0; index < 2; index++) {
        servos.P1.setAngle(30)
        servos.P1.setAngle(150)
    }
}
input.onButtonPressed(Button.A, function () {
    feliz()
})
input.onButtonPressed(Button.B, function () {
    triste()
})
function triste () {
    servos.P1.setAngle(15)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    OLED12864_I2C.clear()
    OLED12864_I2C.zoom(false)
    for (let index = 0; index <= 5; index++) {
        OLED12864_I2C.showString(
        8 + index,
        1 + index,
        "X",
        1
        )
    }
    for (let index = 0; index <= 5; index++) {
        OLED12864_I2C.showString(
        8 + index,
        6 - index,
        "X",
        1
        )
    }
    servos.P1.setAngle(165)
}
OLED12864_I2C.init(60)
OLED12864_I2C.clear()
OLED12864_I2C.showString(
0,
0,
"Hola amigos!",
1
)
