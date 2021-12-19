import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { CgScreen } from 'react-icons/cg';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';
import { useAppContext } from '../context/state';
import { darkTheme, lightTheme } from '../theme';

export default function Modal({
	character,
	episodes,
	episodeCount,
	handleClose,
}) {
	const myLoader = ({ src, width, quality }) => {
		return `${src}`;
	};

	return (
		<div className="modalContailer">
			<ModalContainer>
				<ModalHeader>
					<InnerDivContainer>
						<InnerDiv>
							<div className="image">
								<Image
									loader={myLoader}
									layout="fill"
									src={character.image}
									alt="character image"
									key={character.id}
								/>
							</div>
							<Title>{character.name}</Title>

							<FaHeart color="rgba(255, 250, 0, 0.65)" />
						</InnerDiv>

						<InnerDiv>
							<Tag>{episodeCount} Episodes</Tag>
							<span
								style={{ fontWeight: 'bold', cursor: 'pointer' }}
								onClick={handleClose}
							>
								<MdOutlineCancel size={35} className="cancel" />
							</span>
						</InnerDiv>
					</InnerDivContainer>
				</ModalHeader>{' '}
				<Content>
					{episodes.map((episode) => (
						<ModalContent key={episode.id}>
							{episode.name}
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									fontSize: '13px',
								}}
							>
								<div
									style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
								>
									<CgScreen size={13} className="showButtons" />
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '5px',
										}}
									>
										<Primary>{episode.episode}</Primary>{' '}
										<Secondary>Episode</Secondary>
									</div>
								</div>
								<div
									style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
								>
									<FaCalendarAlt size={13} className="showButtons" />
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '5px',
										}}
									>
										<Primary>{episode.air_date}</Primary>{' '}
										<Secondary>Air Date</Secondary>
									</div>
								</div>
							</div>
						</ModalContent>
					))}
				</Content>
			</ModalContainer>

			<style>
				{`
        .showButtons {
          color: ${
						useAppContext().theme === 'light'
							? lightTheme.buttonColor
							: darkTheme.buttonColor
					}
        }
        .image {
						position: relative;
						overflow: hidden;
						width: 50px;
						height: 50px;
						border-radius: 50%;
					}
        .modalContailer::before {
            content: "";
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,.3);
            z-index: 1;
          }
          button {
            cursor: pointer;
          }
          .cancel {
            color: ${
							useAppContext().theme === 'light'
								? lightTheme.primaryText
								: darkTheme.primaryText
						}
          }
        `}
			</style>
		</div>
	);
}

const Primary = styled.span`
	color: ${(props) => props.theme.primaryText};
`;
const Secondary = styled.span`
	color: ${(props) => props.theme.secondaryText};
`;
const ModalHeader = styled.div`
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.border};
`;
const InnerDivContainer = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${(props) => props.theme.border};
`;
const InnerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
const Title = styled.h3`
	color: ${(props) => props.theme.primaryText};
	margin: 0;
`;
const Tag = styled.button`
	background-color: ${(props) => props.theme.buttonColor};
	border: none;
	outline: none;
	padding: 15px;
	border-radius: 5px;
	font-weight: 900;
	color: ${(props) => props.theme.primaryText};
	margin: 0;
`;
const ModalContainer = styled.div`
	position: fixed;
	width: 50%;
	height: 560px;
	inset: 0;
	margin: auto;
	background-color: ${(props) => props.theme.background};
	border-radius: 5px;
	z-index: 1;
	overflow: auto;
	::-webkit-scrollbar {
		width: 0px;
	}
`;
const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 15px;
`;
const ModalContent = styled.div`
	width: 48%;
	background-color: ${(props) => props.theme.secondaryBackground};
	color: ${(props) => props.theme.primaryText};
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	padding: 20px;
	border-radius: 10px;
	gap: 20px;
	border: 1px solid ${(props) => props.theme.border};
`;
