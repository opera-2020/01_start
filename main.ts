input.onButtonPressed(Button.A, function () {
    basic.showString("Mai")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(9)
})
basic.showIcon(IconNames.Happy)
