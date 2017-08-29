import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import aphroditeInterface from 'react-with-styles-interface-aphrodite'
import { css, withStyles, ThemeProvider } from 'react-with-styles'

import DefaultTheme from './themes/defaultTheme'
import CustomTheme from './themes/customTheme'

ThemedStyleSheet.registerDefaultTheme(DefaultTheme)
ThemedStyleSheet.registerTheme('custom', CustomTheme)

ThemedStyleSheet.registerInterface(aphroditeInterface)

export { css, withStyles, ThemeProvider, ThemedStyleSheet }