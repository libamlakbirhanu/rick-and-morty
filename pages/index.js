import { useEffect, useState } from 'react';
import Cards from '../components/Cards';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useAppContext } from '../context/state';

export default function Home() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		async function wrapper() {
			const client = new ApolloClient({
				uri: 'https://rickandmortyapi.com/graphql',
				cache: new InMemoryCache(),
			});
			const { data } = await client.query({
				query: gql`
					query {
						characters(page: 2, filter: { name: "rick" }) {
							info {
								count
							}
							results {
								id
								name
								image
								origin {
									name
								}
								species
							}
						}
						location(id: 1) {
							id
						}
						episodes {
							info {
								count
							}
							results {
								id
								name
								air_date
								episode
							}
						}
					}
				`,
			});

			setData(data);
			setIsLoading(false);
		}
		wrapper();
	}, []);

	return (
		<div>
			{isLoading ? (
				<p style={{ textAlign: 'center' }}>...loading</p>
			) : data ? (
				<Cards data={data} />
			) : null}
		</div>
	);
}

// export const getServerSideProps = async () => {
// 	const client = new ApolloClient({
// 		uri: 'https://rickandmortyapi.com/graphql',
// 		cache: new InMemoryCache(),
// 	});
// 	const { data } = await client.query({
// 		query: gql`
// 			query {
// 				characters(page: 2, filter: { name: "rick" }) {
// 					info {
// 						count
// 					}
// 					results {
// 						name
// 						image
// 					}
// 				}
// 				location(id: 1) {
// 					id
// 				}
// 				episodesByIds(ids: [1, 2]) {
// 					id
// 				}
// 			}
// 		`,
// 	});

// 	return {
// 		props: {
// 			characters: data.characters.results,
// 		},
// 	};
// };
