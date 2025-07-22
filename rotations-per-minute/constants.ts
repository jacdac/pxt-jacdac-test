namespace jacdac {
    // Service Rotations Per Minute constants
    export const SRV_ROTATIONS_PER_MINUTE = 0x19f8e291
    export const enum RotationsPerMinuteReg {
        /**
         * Read-only rpm i24.8 (int32_t). The RPM reading of the sensor.
         *
         * ```
         * const [rpm] = jdunpack<[number]>(buf, "i24.8")
         * ```
         */
        Rpm = 0x101,

        /**
         * Constant uint8_t. The amount of ticks for 1 full rotation.
         *
         * ```
         * const [clicksPerTurn] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        ClicksPerTurn = 0x180,

        /**
         * Constant rpm i24.8 (int32_t). Lowest rpm that can be reported.
         *
         * ```
         * const [minRpm] = jdunpack<[number]>(buf, "i24.8")
         * ```
         */
        MinRpm = 0x104,

        /**
         * Constant rpm i24.8 (int32_t). Highest rpm that can be reported.
         *
         * ```
         * const [maxRpm] = jdunpack<[number]>(buf, "i24.8")
         * ```
         */
        MaxRpm = 0x105,
    }

    export namespace RotationsPerMinuteRegPack {
        /**
         * Pack format for 'rpm' data.
         */
        export const Rpm = "i24.8"

        /**
         * Pack format for 'clicks_per_turn' data.
         */
        export const ClicksPerTurn = "u8"

        /**
         * Pack format for 'min_rpm' data.
         */
        export const MinRpm = "i24.8"

        /**
         * Pack format for 'max_rpm' data.
         */
        export const MaxRpm = "i24.8"
    }
}
