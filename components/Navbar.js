import { FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import styled from 'styled-components';
import { useAppContext } from '../context/state';
import { darkTheme, lightTheme } from '../theme';

export default function Navbar() {
	const myLoader = ({ src, width, quality }) => {
		return `${src}`;
	};

	return (
		<Nav>
			<NavWrapper>
				<Image
					loader={myLoader}
					width="200%"
					height={50}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png"
					alt="logo"
				/>
				<SearchBarContainer>
					<Input type="text" placeholder="Search characters" />
					<FaSearch className="searchIcon" />
				</SearchBarContainer>

				<DarkMode onClick={useAppContext().changeTheme}>
					<span>
						{useAppContext().theme === 'light' ? <FaMoon /> : <FaSun />}
					</span>
					<span style={{ transform: 'translateY(-10%)' }}>
						{useAppContext().theme === 'light' ? 'Dark' : 'Light'} mode
					</span>
				</DarkMode>
			</NavWrapper>

			<style>
				{`
					.searchIcon {
						color: ${
							useAppContext().theme === 'light'
								? lightTheme.secondaryText
								: darkTheme.secondaryText
						};
						position: absolute;
						left: 15px;
						top: 50%;
						transform: translateY(-50%);
						z-index: 10;
					}
				`}
			</style>
		</Nav>
	);
}

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	width: 95%;
	margin: 0 auto;
`;

const SearchBarContainer = styled.div`
	width: 45%;
	position: relative;
`;

const DarkMode = styled.p`
	font-size: 13px;
	color: ${(props) => props.theme.primaryText};
	font-weight: bold;
	cursor: pointer;
	display: flex;
	gap: 10px;
	align-items: center;
`;

const Nav = styled.nav`
	width: 100%;
	background-color: ${(props) => props.theme.background};
	padding: 0;
	margin: 0;
	border-bottom: 2px solid ${(props) => props.theme.border};
`;

const Input = styled.input`
	background: ${(props) => props.theme.secondaryBackground};
	padding: 10px 50px;
	width: 100%;
	border: 1px solid rgba(36, 36, 36, 0.2);
	border-radius: 25px;
	outline: none;
`;
