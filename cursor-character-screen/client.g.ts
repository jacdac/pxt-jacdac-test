namespace modules {
    /**
     * A screen that displays characters, typically a LCD/OLED character screen.
     **/
    //% fixedInstances blockGap=8
    export class CursorCharacterScreenClient extends jacdac.Client {
        private readonly _enabled: jacdac.RegisterClient<[number]>
        private readonly _rows: jacdac.RegisterClient<[number]>
        private readonly _columns: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_CURSOR_CHARACTER_SCREEN, role)

            this._enabled = this.addRegister<[number]>(
                jacdac.CursorCharacterScreenReg.Enabled,
                jacdac.CursorCharacterScreenRegPack.Enabled,
                jacdac.RegisterClientFlags.Optional
            )
            this._rows = this.addRegister<[number]>(
                jacdac.CursorCharacterScreenReg.Rows,
                jacdac.CursorCharacterScreenRegPack.Rows,
                jacdac.RegisterClientFlags.Const
            )
            this._columns = this.addRegister<[number]>(
                jacdac.CursorCharacterScreenReg.Columns,
                jacdac.CursorCharacterScreenRegPack.Columns,
                jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Enable or disable the screen.
         */
        //% callInDebugger
        //% group="Display"
        //% block="%cursorcharscreen enabled (\\%)"
        //% blockId=jacdac_cursorcharscreen_enabled___get
        //% weight=100
        enabled(): number {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Enable or disable the screen.
         */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_enabled___set
        //% block="set %cursorcharscreen enabled to %value (\\%)"
        //% weight=99
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setEnabled(value: number) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value / 100
            this._enabled.values = values as [number]
        }

        /**
         * Gets the number of rows.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=98
        rows(): number {
            this.start()
            const values = this._rows.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Gets the number of columns.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=97
        columns(): number {
            this.start()
            const values = this._columns.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Returns the cursor to the upper-left corner.
         */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_home_cmd
        //% block="%cursorcharscreen home"
        //% weight=96
        home(): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.onlyHeader(jacdac.CursorCharacterScreenCmd.Home)
            )
        }

        /**
         * Clears the display.
         */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_clear_cmd
        //% block="%cursorcharscreen clear"
        //% weight=95
        clear(): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.onlyHeader(
                    jacdac.CursorCharacterScreenCmd.Clear
                )
            )
        }

        /**
         * Sets the x / y position of cursor in the character grid.
         */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_setCursor_cmd
        //% block="%cursorcharscreen set Cursor |x $x |y $y"
        //% weight=94
        setCursor(x: number, y: number): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.CursorCharacterScreenCmd.SetCursor,
                    jacdac.CursorCharacterScreenCmdPack.SetCursor,
                    [x, y]
                )
            )
        }

        /**
         * Shows a message at the current cursor position.
         */
        //% group="Display"
        //% blockId=jacdac_cursorcharscreen_show_cmd
        //% block="%cursorcharscreen show $message"
        //% weight=93
        show(message: string): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.CursorCharacterScreenCmd.Show,
                    jacdac.CursorCharacterScreenCmdPack.Show,
                    [message]
                )
            )
        }
    }

    //% fixedInstance whenUsed weight=1 block="cursor character screen1"
    export const cursorCharacterScreen1 = new CursorCharacterScreenClient(
        "cursor Character Screen1"
    )
}
