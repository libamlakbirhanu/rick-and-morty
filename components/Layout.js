import Head from 'next/head';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../theme';
import { useAppContext } from '../context/state';

export default function Layout({ children }) {
	return (
		<ThemeProvider
			theme={useAppContext().theme === 'light' ? lightTheme : darkTheme}
		>
			<GlobalStyles />
			<Head>
				<title>rick-N-morty</title>
				<meta name="keywords" content="rick and morty, nextjs" />
			</Head>
			<Navbar />
			<div>
				{children}
				<style jsx>
					{`
						div {
							width: 95%;
							margin: auto;
						}
					`}
				</style>
			</div>
		</ThemeProvider>
	);
}
