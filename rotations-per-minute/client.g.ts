namespace modules {
    /**
     * A sensor that measures RPM (rotations per minute) of a rotor.
     **/
    //% fixedInstances blockGap=8
    export class RotationsPerMinuteClient extends jacdac.SimpleSensorClient {
        private readonly _clicksPerTurn: jacdac.RegisterClient<[number]>
        private readonly _minRpm: jacdac.RegisterClient<[number]>
        private readonly _maxRpm: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_ROTATIONS_PER_MINUTE,
                role,
                jacdac.RotationsPerMinuteRegPack.Rpm
            )

            this._clicksPerTurn = this.addRegister<[number]>(
                jacdac.RotationsPerMinuteReg.ClicksPerTurn,
                jacdac.RotationsPerMinuteRegPack.ClicksPerTurn,
                jacdac.RegisterClientFlags.Const
            )
            this._minRpm = this.addRegister<[number]>(
                jacdac.RotationsPerMinuteReg.MinRpm,
                jacdac.RotationsPerMinuteRegPack.MinRpm,
                jacdac.RegisterClientFlags.Const
            )
            this._maxRpm = this.addRegister<[number]>(
                jacdac.RotationsPerMinuteReg.MaxRpm,
                jacdac.RotationsPerMinuteRegPack.MaxRpm,
                jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The RPM reading of the sensor.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%rpm rpm"
        //% blockId=jacdac_rpm_rpm___get
        //% weight=100
        rpm(): number {
            return this.reading()
        }

        /**
         * The amount of ticks for 1 full rotation.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=99
        clicksPerTurn(): number {
            this.start()
            const values = this._clicksPerTurn.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Lowest rpm that can be reported.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=98
        minRpm(): number {
            this.start()
            const values = this._minRpm.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Lowest rpm that can be reported.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=97
        maxRpm(): number {
            this.start()
            const values = this._maxRpm.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the rpm changes by the given threshold value.
         */
        //% group="Movement"
        //% blockId=jacdac_rpm_on_rpm_change
        //% block="on %rpm rpm changed by %threshold"
        //% weight=96
        //% threshold.min=0
        //% threshold.defl=1
        onRpmChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="rotations per minute1"
    export const rotationsPerMinute1 = new RotationsPerMinuteClient(
        "rotations Per Minute1"
    )
}
