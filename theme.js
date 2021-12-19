import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	background: '#fff',
	secondaryBackground: '#fff',
	border: 'rgba(0, 0, 0, 0.1)',
	primaryText: '#000',
	secondaryText: 'rgba(0, 0, 0, 0.5)',
	buttonColor: 'rgba(255, 250, 0, 0.65)',
};

export const darkTheme = {
	background: 'rgba(36, 36, 36)',
	secondaryBackground: 'rgba(20, 20, 20)',
	border: 'rgba(0,0,0,.85)',
	primaryText: 'rgba(255, 255, 255, .8)',
	secondaryText: 'rgba(255, 255, 255, 0.5)',
	buttonColor: 'rgba(255, 250, 0, 0.65)',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background}
  }
`;
