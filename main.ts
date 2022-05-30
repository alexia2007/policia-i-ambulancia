let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playTone(988, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        music.playTone(494, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
})
