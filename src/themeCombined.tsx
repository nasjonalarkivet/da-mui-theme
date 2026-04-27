import { createTheme } from '@mui/material/styles';
import { nbNO as coreNbNo } from '@mui/material/locale';
import themeLight from './light';
import themeDark from './dark';
import { createComponents } from './components';
import { themeTypographyExtended, themeShape, themeShadows, themeBorderRadius } from './shared';

const baseTheme = createTheme({
	cssVariables: {
		cssVarPrefix: 'mui',
		colorSchemeSelector: 'data-mui-color-scheme'
	},
	colorSchemes: {
		light: {
			palette: themeLight.palette,
		},
		dark: {
			palette: themeDark.palette,
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
