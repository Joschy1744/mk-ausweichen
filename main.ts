basic.showNumber(maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters), 150)
basic.forever(function () {
    while (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) >= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        maqueen.setColor(0x00ff00)
        basic.setLedColor(0x00ff00)
    }
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.setColor(0xff0000)
    basic.pause(500)
    basic.setLedColor(0xff0000)
    while (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) <= 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
        maqueen.setColor(0x00ff00)
        basic.setLedColor(0x00ff00)
    }
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.setColor(0xff0000)
    basic.setLedColor(0xff0000)
    basic.pause(500)
})
