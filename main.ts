serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Temperature", input.temperature())
    basic.pause(500)
})
