led.enable(true)
basic.forever(function () {
    if (input.temperature() > 29) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
