/** @format */

import { memo, React, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { selectCar } from "../app/features/car/carSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

const Header = () => {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);
	const cars = useSelector(selectCar);
	const history = useHistory();

	return (
		<Wrapper>
			<ImageContainer>
				<img src='/images/logo.svg' alt='logo' />
			</ImageContainer>

			<Menu>
				{cars &&
					cars.map((car) => {
						return (
							<a key={uuidv4()} href='#'>
								{car}
							</a>
						);
					})}
				<a>Solar Roof</a>
				<a>Solar Panels</a>
			</Menu>

			<RightMenu>
				<a className='shop'>Shop</a>
				<a onClick={() => history.push("/register")}>Tesla Account</a>
				<IconButton>
					<CustomMenu
						onClick={() => {
							SetBurgerMenuStatus(true);
						}}></CustomMenu>
				</IconButton>
			</RightMenu>

			<HiddenCustomMenu
				onClick={() => {
					SetBurgerMenuStatus(true);
				}}></HiddenCustomMenu>

			<BurgerNav showMenu={burgerMenuStatus}>
				<CustomClsoeIconWrapper>
					<IconButton>
						<CustomClsoeIcon
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}></CustomClsoeIcon>
					</IconButton>
				</CustomClsoeIconWrapper>
				<li>
					<a onClick={() => history.push("/register")}>Tesla Account</a>
				</li>

				{cars &&
					cars.map((car) => {
						return (
							<li key={uuidv4()}>
								<a href='#'>{car}</a>
							</li>
						);
					})}

				<li>
					<a>Existing Inventory</a>
				</li>
				<li>
					<a>Used Inventory</a>
				</li>
				<li>
					<a>Trade-In </a>
				</li>
				<li>
					<a>Test Drive</a>
				</li>
				<li>
					<a>Cybertruck</a>
				</li>
			</BurgerNav>
		</Wrapper>
	);
};

export default memo(Header);

const Wrapper = styled.div`
	top: 0;
	left: 0;
	right: 0;
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	padding: 0 20px;
	z-index: 1000000 !important;

	@media (max-width: 992px) {
		justify-content: space-between;
	}
`;

const ImageContainer = styled.div`
	@media (max-width: 568px) {
		margin-right: 15px;
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	flex: 1;

	a {
		font-size: 0.9em;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		text-transform: capitalize;
		min-width: fit-content;
		color: black;
		padding: 8px 18px;
		border-radius: 8px;
		transition: 0.4s;

		:hover {
			background: rgba(245, 245, 245, 0.1);
		}

		a.shop {
			color: red;
		}
	}

	@media (max-width: 992px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;

	a {
		font-size: 0.9em;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		text-transform: capitalize;
		min-width: fit-content;
		color: black;
		padding: 8px 18px;
		border-radius: 8px;
		transition: 0.4s;

		:hover {
			background: rgba(245, 245, 245, 0.1);
		}
	}

	@media (max-width: 568px) {
		display: none;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
	margin-left: 10px;
`;

const HiddenCustomMenu = styled(MenuIcon)`
	display: none !important;

	@media (max-width: 568px) {
		display: block !important;
	}
`;

const BurgerNav = styled.div`
	transform: ${(props) =>
		props.showMenu ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s;
	position: fixed;
	top: 0;
	right: 0;
	min-height: 100vh;
	background: white;
	min-width: 300px;
	width: 300px;
	padding: 20px;

	li {
		list-style-type: none;
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	a {
		cursor: pointer;
	}
`;

const CustomClsoeIconWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const CustomClsoeIcon = styled(CloseIcon)`
	cursor: pointer;
`;
