import styled from 'styled-components';
import Card from './Card';

export default function Cards({ data }) {
	const { characters, episodes } = data;

	return (
		<>
			{data && (
				<CardsContainer>
					{characters.results.map((character) => (
						<Card
							key={character.id}
							character={character}
							episodes={episodes.results}
							episodeCount={episodes.info.count}
						/>
					))}
				</CardsContainer>
			)}
		</>
	);
}

const CardsContainer = styled.div`
	margin-top: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
