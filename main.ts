input.onButtonPressed(Button.A, function () {
    item += 5
})
input.onButtonPressed(Button.B, function () {
    item += -5
})
led.enable(true)
let item = 0
basic.forever(function () {
    led.plotBarGraph(
    item,
    25
    )
    if (item > 25) {
        item = 25
    }
    if (item < 0) {
        item = 0
    }
})
