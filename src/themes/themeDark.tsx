import { createTheme } from '@mui/material/styles';
import { nbNO as coreNbNo } from '@mui/material/locale';
import dark, { darkCustomShadows } from '../palettes/dark.js';
import { createComponents } from '../config/componentOverrides.js';

const themeDark = createTheme({
	cssVariables: {
		cssVarPrefix: 'mui',
		colorSchemeSelector: 'data-mui-color-scheme'
	},
	palette: dark.palette,
	typography: dark.typography,
	shape: dark.shape,
	customShape: dark.customShape,
	...{ customShadows: darkCustomShadows },
	components: createComponents({ customShadows: darkCustomShadows }),
}, coreNbNo);

export default themeDark;
