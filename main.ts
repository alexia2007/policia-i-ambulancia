input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
