import { createTheme } from '@mui/material/styles';
import { nbNO as coreNbNo } from '@mui/material/locale';
import light from './light';
import dark from './dark';
import { createComponents } from './components';
import { themeTypographyExtended, themeShape, themeShadows, themeBorderRadius } from './shared';

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
