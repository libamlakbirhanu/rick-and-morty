import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [theme, setTheme] = useState('light');
	const [data, setData] = useState(null);

	const changeTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	let sharedState = {
		theme,
		changeTheme,
	};

	return (
		<AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
