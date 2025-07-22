import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {CssBaseline, ThemeProvider} from '@mui/material';
import App from './App.tsx';
import editorTheme from './theme';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={editorTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
);
