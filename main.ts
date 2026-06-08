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
    if (Math.randomBoolean()) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    basic.pause(randint(200, 600))
    maqueen.motorStop(maqueen.Motors.All)
    basic.setLedColor(0xff0000)
    basic.pause(500)
})
