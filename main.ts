basic.showNumber(1)
basic.showNumber(2)
basic.showNumber(3)
basic.showNumber(4)
basic.showNumber(5)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showString("Hello!")
    basic.showIcon(IconNames.Heart)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.pause(500)
})
