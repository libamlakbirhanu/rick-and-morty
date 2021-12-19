import { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

import Modal from './Modal';

export default function Card({ character, episodes, episodeCount }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const myLoader = ({ src, width, quality }) => {
		return `${src}`;
	};

	return (
		<div style={{ marginBottom: '10px', width: '31%' }}>
			<CardContainer>
				<div className="image">
					<Image
						loader={myLoader}
						layout="fill"
						src={character.image}
						alt="character image"
						key={character.id}
					/>
				</div>

				<ContentWrapper>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingTop: '10px',
						}}
					>
						<div>
							<div>
								<Title>{character.name}</Title>
							</div>
							<div className="speciesInfoWrapper">
								<div className="speciesInfo">
									<SecondaryP>Origin</SecondaryP>
									<PrimaryP>{character.origin.name}</PrimaryP>
								</div>
								<div className="speciesInfo">
									<SecondaryP>Species</SecondaryP>
									<PrimaryP>{character.species}</PrimaryP>
								</div>
							</div>
						</div>
						<FaHeart color="rgba(255, 250, 0, 0.65)" />
					</div>

					<Button onClick={handleOpen}>see episodes &rarr;</Button>
					{open && (
						<Modal
							handleClose={handleClose}
							character={character}
							episodes={episodes}
							episodeCount={episodeCount}
						/>
					)}
				</ContentWrapper>
			</CardContainer>

			<style jsx>
				{`
					.image {
						position: relative;
						overflow: hidden;
						width: 120px;
						height: 140px;
						border-radius: 10px;
					}
					.speciesInfoWrapper {
						display: flex;
						gap: 20px;
					}
					.speciesInfo {
						margin-top: 10px;
					}
				`}
			</style>
		</div>
	);
}

const CardContainer = styled.div`
	position: relative;
	border: 1px solid ${(props) => props.theme.border};
	background: ${(props) => props.theme.secondaryBackground};
	display: flex;
	gap: 15px;
	padding: 8px 10px;
	padding-right: 20px;
	border-radius: 10px;
`;
const Button = styled.button`
	display: block;
	border: none;
	outline: none;
	border-radius: 3px;
	padding: 10px 5px;
	margin-top: 10px;
	width: 120px;
	font-weight: bold;
	background-color: ${(props) => props.theme.buttonColor};
	margin-left: auto;
	cursor: pointer;
	color: ${(props) => props.theme.primaryText};
`;
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	font-family: sans-serif;
	justify-content: space-between;
`;
const PrimaryP = styled.p`
	margin: 0;
	font-size: 12px;
	color: ${(props) => props.theme.primaryText};
	margin-bottom: 5px;
`;
const SecondaryP = styled.p`
	margin: 0;
	font-size: 12px;
	color: ${(props) => props.theme.secondaryText};
	margin-bottom: 5px;
`;
const Title = styled.h3`
	color: ${(props) => props.theme.primaryText};
	margin: 0;
`;
