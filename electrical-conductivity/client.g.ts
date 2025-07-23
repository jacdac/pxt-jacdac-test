namespace modules {
    /**
     * A sensor that measures electrical conductivity (EC) of a medium.
     **/
    //% fixedInstances blockGap=8
    export class ElectricalConductivityClient extends jacdac.SimpleSensorClient {

        private readonly _electricalConductivityError : jacdac.RegisterClient<[number]>;
        private readonly _minElectricalConductivity : jacdac.RegisterClient<[number]>;
        private readonly _maxElectricalConductivity : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_ELECTRICAL_CONDUCTIVITY, role, jacdac.ElectricalConductivityRegPack.ElectricalConductivity)

            this._electricalConductivityError = this.addRegister<[number]>(jacdac.ElectricalConductivityReg.ElectricalConductivityError, jacdac.ElectricalConductivityRegPack.ElectricalConductivityError)
            this._minElectricalConductivity = this.addRegister<[number]>(jacdac.ElectricalConductivityReg.MinElectricalConductivity, jacdac.ElectricalConductivityRegPack.MinElectricalConductivity, jacdac.RegisterClientFlags.Const)
            this._maxElectricalConductivity = this.addRegister<[number]>(jacdac.ElectricalConductivityReg.MaxElectricalConductivity, jacdac.ElectricalConductivityRegPack.MaxElectricalConductivity, jacdac.RegisterClientFlags.Const)            
        }
    

        /**
        * The EC reading of the sensor.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%electricalconductivity electrical conductivity (S/m)"
        //% blockId=jacdac_electricalconductivity_electrical_conductivity___get
        //% weight=100
        electricalConductivity(): number {
            return this.reading();
        
        }

        /**
        * The error on the EC reading.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        electricalConductivityError(): number {
            this.start();            
            const values = this._electricalConductivityError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Lowest EC that can be reported.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        minElectricalConductivity(): number {
            this.start();            
            const values = this._minElectricalConductivity.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Highest EC that can be reported.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        maxElectricalConductivity(): number {
            this.start();            
            const values = this._maxElectricalConductivity.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Run code when the electrical conductivity changes by the given threshold value.
        */
        //% group="Environment"
        //% blockId=jacdac_electricalconductivity_on_electrical_conductivity_change
        //% block="on %electricalconductivity electrical conductivity changed by %threshold (S/m)"
        //% weight=96
        //% threshold.min=0
        //% threshold.defl=1
        onElectricalConductivityChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

    
    }
    
    //% fixedInstance whenUsed weight=1 block="electrical conductivity1"
    export const electricalConductivity1 = new ElectricalConductivityClient("electrical Conductivity1");
}