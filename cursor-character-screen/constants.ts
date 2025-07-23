namespace jacdac {
    // Service Cursor Character Screen constants
    export const SRV_CURSOR_CHARACTER_SCREEN = 0x195ee163
    export const enum CursorCharacterScreenReg {
        /**
         * Read-write string (bytes). Text to show.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Message = 0x2,

        /**
         * Read-write ratio u0.16 (uint16_t). Enable or disable the screen.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Enabled = 0x1,

        /**
         * Constant # uint8_t. Gets the number of rows.
         *
         * ```
         * const [rows] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Rows = 0x180,

        /**
         * Constant # uint8_t. Gets the number of columns.
         *
         * ```
         * const [columns] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Columns = 0x181,
    }

    export namespace CursorCharacterScreenRegPack {
        /**
         * Pack format for 'message' data.
         */
        export const Message = "s"

        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u0.16"

        /**
         * Pack format for 'rows' data.
         */
        export const Rows = "u8"

        /**
         * Pack format for 'columns' data.
         */
        export const Columns = "u8"
    }

    export const enum CursorCharacterScreenCmd {
        /**
         * No args. Returns the cursor to the upper-left corner.
         */
        Home = 0x83,

        /**
         * No args. Clears the display.
         */
        Clear = 0x84,

        /**
         * Sets the x / y position of cursor in the character grid.
         *
         * ```
         * const [x, y] = jdunpack<[number, number]>(buf, "u8 u8")
         * ```
         */
        SetCursor = 0x85,
    }

    export namespace CursorCharacterScreenCmdPack {
        /**
         * Pack format for 'setCursor' data.
         */
        export const SetCursor = "u8 u8"
    }
}
