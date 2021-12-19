import Layout from '../components/Layout';
import '../styles/globals.css';
import { AppWrapper } from '../context/state';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppWrapper>
	);
}

export default MyApp;
