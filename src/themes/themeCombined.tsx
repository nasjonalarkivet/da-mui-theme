import { createTheme } from '@mui/material/styles';
import { nbNO as coreNbNo } from '@mui/material/locale';
import light from '../palettes/light.js';
import dark from '../palettes/dark.js';
import { createComponents } from '../config/componentOverrides.js';
import { themeTypographyExtended, themeShape, themeShadows, themeBorderRadius } from '../config/shared.js';

const baseTheme = createTheme({
	cssVariables: {
		cssVarPrefix: 'mui',
		colorSchemeSelector: 'data-mui-color-scheme'
	},
	colorSchemes: {
		light: {
			palette: light.palette,
		},
		dark: {
			palette: dark.palette,
		}
	},
	typography: themeTypographyExtended,
	shape: themeShape,
	customShape: themeBorderRadius,
	...{ customShadows: themeShadows.customShadows },
}, coreNbNo);

const themeCombined = createTheme(baseTheme, {
	components: createComponents({ customShadows: themeShadows.customShadows }),
});

export default themeCombined;
