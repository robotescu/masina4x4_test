PlanetX_AILens.initModule()
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.forward)) {
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
        basic.pause(1000)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
        wuKong.mecanumRun(wuKong.RunList.left, 100)
        basic.pause(500)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
        wuKong.mecanumRun(wuKong.RunList.right, 100)
        basic.pause(500)
    } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.back)) {
        wuKong.mecanumSpin(wuKong.TurnList.Right, 100)
        basic.pause(1000)
    }
    wuKong.mecanumStop()
    for (let index = 0; index < 3; index++) {
        PlanetX_AILens.cameraImage()
    }
    basic.pause(500)
})
