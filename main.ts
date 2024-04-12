input.onButtonPressed(Button.A, function () {
    wuKong.mecanumRun(wuKong.RunList.Front, 100)
    basic.pause(2000)
    wuKong.mecanumStop()
    wuKong.mecanumRun(wuKong.RunList.rear, 100)
    basic.pause(1000)
    wuKong.mecanumStop()
    wuKong.mecanumRun(wuKong.RunList.right, 100)
    basic.pause(2000)
    wuKong.mecanumStop()
    wuKong.mecanumRun(wuKong.RunList.left, 100)
    basic.pause(2000)
    wuKong.mecanumStop()
})
input.onButtonPressed(Button.B, function () {
    wuKong.mecanumSpin(wuKong.TurnList.Left, 100)
    basic.pause(2000)
    wuKong.mecanumStop()
    wuKong.mecanumSpin(wuKong.TurnList.Right, 100)
    basic.pause(2000)
    wuKong.mecanumStop()
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    basic.pause(2000)
    wuKong.mecanumStop()
    wuKong.mecanumDrift(wuKong.TurnList.Right)
    basic.pause(2000)
    wuKong.mecanumStop()
})
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
basic.showIcon(IconNames.Happy)
