import {createTheme, PaletteColor} from '@mui/material';
import { themePalette } from './palette';

const editorTheme = createTheme({
	palette: themePalette,
	typography: {
		fontFamily: 'sans-serif',
		h1: {
			fontSize: '3rem',
			color: themePalette.text?.primary,
			fontWeight: 600,
		},
		h2: {
			fontSize: '2rem',
			color: themePalette.text?.primary,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: (themePalette.secondary as PaletteColor)?.dark,
					backgroundImage: `linear-gradient(90deg, ${(themePalette.secondary as PaletteColor)?.dark}, ${(themePalette.secondary as PaletteColor)?.main})`,
					fontFamily: 'sans-serif',
					margin: 0,
					minWidth: '320px',
					minHeight: '100vh',
					display: 'flex',
					placeItems: 'center',
				},
				'#root': {
					maxWidth: '1280px',
					width: '100%',
					padding: '0 2rem',
					textAlign: 'center',
				}
			},
		}
	}
});

export default editorTheme;
