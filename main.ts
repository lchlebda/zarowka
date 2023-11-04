input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 1023)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.forever(function () {
    if (input.soundLevel() > 150) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
