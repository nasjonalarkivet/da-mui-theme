import { createTheme } from '@mui/material/styles';
import { nbNO as coreNbNo } from '@mui/material/locale';
import light, { lightCustomShadows } from '../palettes/light.js';
import { createComponents } from '../config/componentOverrides.js';

const themeLight = createTheme({
	cssVariables: {
		cssVarPrefix: 'mui',
		colorSchemeSelector: 'data-mui-color-scheme'
	},
	palette: light.palette,
	typography: light.typography,
	shape: light.shape,
	customShape: light.customShape,
	...{ customShadows: lightCustomShadows },
	components: createComponents({ customShadows: lightCustomShadows }),
}, coreNbNo);

export default themeLight;
