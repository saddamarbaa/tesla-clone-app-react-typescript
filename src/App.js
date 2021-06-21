/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from "react-router-dom";

import Header from "./compontents/Header";
import Home from "./compontents/Home";
import styled from "styled-components";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "./app/features/user/userSlice";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser); // grab the user from global state

	// keep user login In
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser) {
				// User is signed in,
				// dispatch an action and change the state(save user in the global store)
				dispatch(
					setLogInState({
						uid: authenticatedUser.uid,
						email: authenticatedUser.email,
					}),
				);
				// console.log("authenticated is User object", authenticatedUser);
			} else {
				// User is signed out
				// dispatch an action and change the state(remove a user from  the global store)
				dispatch(setLogOutState());
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	const currentURL = window.location.href; // returns the absolute URL of a page
	const pathname = window.location.pathname; //returns the current url minus the domain name

	return (
		<AppWrapper>
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path='/' exact>
							<Header />
							<Home />
						</Route>
						<Route path='/login' exact>
							<LoginScreen />
						</Route>
						<Route path='/register' exact>
							<SignUpScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	display: "flex";
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
`;
