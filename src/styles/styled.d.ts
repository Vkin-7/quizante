import 'styled-components'
import db from '../../utils/db.json'

export type Theme = typeof db.theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
