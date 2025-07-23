namespace jacdac {
    // Service Electrical Conductivity constants
    export const SRV_ELECTRICAL_CONDUCTIVITY = 0x1f1f7277
    export const enum ElectricalConductivityReg {
        /**
         * Read-only S/m u22.10 (uint32_t). The EC reading of the sensor.
         *
         * ```
         * const [electricalConductivity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        ElectricalConductivity = 0x101,

        /**
         * Read-only S/m u22.10 (uint32_t). The error on the EC reading.
         *
         * ```
         * const [electricalConductivityError] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        ElectricalConductivityError = 0x106,

        /**
         * Constant S/m u22.10 (uint32_t). Lowest EC that can be reported.
         *
         * ```
         * const [minElectricalConductivity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinElectricalConductivity = 0x104,

        /**
         * Constant S/m u22.10 (uint32_t). Highest EC that can be reported.
         *
         * ```
         * const [maxElectricalConductivity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxElectricalConductivity = 0x105,
    }

    export namespace ElectricalConductivityRegPack {
        /**
         * Pack format for 'electrical_conductivity' data.
         */
        export const ElectricalConductivity = "u22.10"

        /**
         * Pack format for 'electrical_conductivity_error' data.
         */
        export const ElectricalConductivityError = "u22.10"

        /**
         * Pack format for 'min_electrical_conductivity' data.
         */
        export const MinElectricalConductivity = "u22.10"

        /**
         * Pack format for 'max_electrical_conductivity' data.
         */
        export const MaxElectricalConductivity = "u22.10"
    }
}
