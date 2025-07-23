namespace modules {
    /**
     * A screen that displays characters, typically a LCD/OLED character screen.
     **/
    //% fixedInstances blockGap=8
    export class CursorCharacterScreenClient extends jacdac.Client {

        private readonly _message : jacdac.RegisterClient<[string]>;
        private readonly _enabled : jacdac.RegisterClient<[number]>;
        private readonly _rows : jacdac.RegisterClient<[number]>;
        private readonly _columns : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_CURSOR_CHARACTER_SCREEN, role)

            this._message = this.addRegister<[string]>(jacdac.CursorCharacterScreenReg.Message, jacdac.CursorCharacterScreenRegPack.Message)
            this._enabled = this.addRegister<[number]>(jacdac.CursorCharacterScreenReg.Enabled, jacdac.CursorCharacterScreenRegPack.Enabled, jacdac.RegisterClientFlags.Optional)
            this._rows = this.addRegister<[number]>(jacdac.CursorCharacterScreenReg.Rows, jacdac.CursorCharacterScreenRegPack.Rows, jacdac.RegisterClientFlags.Const)
            this._columns = this.addRegister<[number]>(jacdac.CursorCharacterScreenReg.Columns, jacdac.CursorCharacterScreenRegPack.Columns, jacdac.RegisterClientFlags.Const)            
        }
    

        /**
        * Text to show.
        */
        //% callInDebugger
        //% group="Display"
        //% block="%cursorcharscreen message"
        //% blockId=jacdac_cursorcharscreen_message___get
        //% weight=100
        message(): string {
            this.start();            
            const values = this._message.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Text to show.
        */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_message___set
        //% block="set %cursorcharscreen message to %value"
        //% weight=99
        setMessage(value: string) {
            this.start();
            const values = this._message.values as any[];
            values[0] = value;
            this._message.values = values as [string];
        }

        /**
        * Enable or disable the screen.
        */
        //% callInDebugger
        //% group="Display"
        //% block="%cursorcharscreen enabled (\\%)"
        //% blockId=jacdac_cursorcharscreen_enabled___get
        //% weight=98
        enabled(): number {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Enable or disable the screen.
        */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_enabled___set
        //% block="set %cursorcharscreen enabled to %value (\\%)"
        //% weight=97
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setEnabled(value: number) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value / 100;
            this._enabled.values = values as [number];
        }

        /**
        * Gets the number of rows.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=96
        rows(): number {
            this.start();            
            const values = this._rows.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Gets the number of columns.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=95
        columns(): number {
            this.start();            
            const values = this._columns.pauseUntilValues() as any[];
            return values[0];
        }


        /**
        * Returns the cursor to the upper-left corner.
        */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_home_cmd
        //% block="%cursorcharscreen home"
        //% weight=94
        home(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.CursorCharacterScreenCmd.Home))
        }

        /**
        * Clears the display.
        */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_clear_cmd
        //% block="%cursorcharscreen clear"
        //% weight=93
        clear(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.CursorCharacterScreenCmd.Clear))
        }

        /**
        * Sets the x / y position of cursor in the character grid.
        */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_setCursor_cmd
        //% block="%cursorcharscreen set Cursor |x $x |y $y"
        //% weight=92
        setCursor(x: number, y: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.CursorCharacterScreenCmd.SetCursor, jacdac.CursorCharacterScreenCmdPack.SetCursor, [x, y]))
        }
    
    }
    
    //% fixedInstance whenUsed weight=1 block="cursor character screen1"
    export const cursorCharacterScreen1 = new CursorCharacterScreenClient("cursor Character Screen1");
}