/** @format */

import styled from "styled-components";
import { useHistory } from "react-router";
import { auth } from "../config/firebase";
import React, { memo, useRef, useState } from "react";

const SignUpScreen = () => {
	const [firstNameValue, SetFirstNameValue] = useState();
	const [lastNameValue, SetLastNameValue] = useState();
	const [emailValue, SetEmailValue] = useState();
	const [passwordValue, SetPasswordValue] = useState();
	const [rePasswordValue, SetRePasswordValue] = useState();

	const history = useHistory();
	const emailReference = useRef(null);
	const passwordReference = useRef(null);
	const rePasswordReference = useRef(null);

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (event) => {
		event.preventDefault();

		auth
			.createUserWithEmailAndPassword(
				emailReference.current.value,
				passwordReference.current.value,
			)
			.then((registeredUser) => {
				history.push("/login");
				// Registered successful.
				// console.log(registeredUser);
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	return (
		<LogInWrapper>
			<Container>
				<Confirmation>
					<span onClick={() => history.push("/login")}>
						Already have an account? &nbsp;
					</span>
					<a href='/login'> Sign In</a>
				</Confirmation>
				<Title>Create Account</Title>

				<FormWrapper>
					<form autoComplete='off'>
						<input
							onChange={(event) => {
								SetFirstNameValue(event.target.value);
							}}
							class='input'
							type='text'
							name='first_name'
							placeholder='First Name'
							autoComplete='first_name'></input>

						<input
							onChange={(event) => {
								SetLastNameValue(event.target.value);
							}}
							class='input'
							type='text'
							name='last_name'
							placeholder='Last Name'
							autoComplete='last_name'></input>

						<input
							onChange={(event) => {
								SetEmailValue(event.target.value);
							}}
							ref={emailReference}
							class='input'
							type='email'
							id='email'
							name='email'
							placeholder='Email'
							autoComplete='email'
							required></input>

						<input
							onChange={(event) => {
								SetPasswordValue(event.target.value);
							}}
							ref={passwordReference}
							class='input'
							type='password'
							name='password'
							placeholder='Password'
							autoComplete='new-password'
							autocapitalize='none'
							required></input>

						{/* <input
							onChange={(event) => {
								SetRePasswordValue(event.target.value);
							}}
							ref={rePasswordReference}
							type='password'
							name='password_confirm'
							placeholder='Type your password again'
							autocomplete='0'
							autocapitalize='none'
							required></input> */}

						<button
							disabled={
								!firstNameValue ||
								!lastNameValue ||
								!emailValue ||
								!passwordValue ||
								!rePasswordValue
							}
							onClick={registerUserWithEmailAndPasswordHandler}
							class='button create-button'
							type='submit'
							name='submit'
							id='submit-form'>
							Create Account
						</button>
					</form>
				</FormWrapper>
			</Container>
		</LogInWrapper>
	);
};

export default memo(SignUpScreen);

const LogInWrapper = styled.div`
	background: radial-gradient(transparent, hsl(0, 0%, 2%)),
		#333 url("/images/login-semi-hangar.jpg") no-repeat center center/cover;
	width: 100vw;
	min-height: 100vh;
	font-size: 1rem;
	color: #4a4a4a;
`;

const Confirmation = styled.div`
	background: white;
	padding: 15px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;

	a {
		color: #3e6be2;
		cursor: pointer;
		text-decoration: underline;
	}
`;

const Container = styled.div`
	background: #eeeeee;
	position: fixed;
	right: 7%;
	top: 10px;
	bottom: 2.5em;
	left: 51%;
	border-radius: 10px;

	@media (max-width: 991.98px) {
		right: 0;
		top: 10px;
		bottom: 0;
		left: 0%;
	}
`;

const Title = styled.h2`
	font-weight: 200;
	font-size: 1.6rem;
	margin: 15px 0 30px 0;
	text-align: center;
`;

const FormWrapper = styled.div`
	padding: 0 10%;
	display: flex;
	justify-content: center;
	form {
		padding-top: 30px;
		width: 100%;
		flex-direction: column;
		margin-top: 15px;
		border-top: 1px solid rgba(123, 123, 123, 0.4);
		max-width: 500px;

		@media (max-width: 991.98px) {
			max-width: 450px;
		}

		input {
			align-items: center;
			border-radius: 50px;
			display: inline-flex;
			font-size: 1rem;
			height: 2.5em;
			justify-content: flex-start;
			line-height: 1.5;
			padding-left: 0.8em;
			padding-right: 0.8em;
			background-color: #fff;
			border: 1px solid #dbdbdb;
			color: #363636;
			box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
			width: 100%;
			margin-bottom: 20px;
			transition: 0.5s;

			:focus {
				border: 1px solid #666666;
				outline: 0 !important;
			}

			::placeholder {
				font-size: 15px;
			}
		}
	}

	button {
		width: 100%;
		display: block;
		transition: 0.4s;
		border: none;
		border-radius: 80px !important;
		cursor: pointer;

		background: #3e6be2;
		color: #f3d9f0;
		border-radius: 3px;
		box-shadow: none;
		font-size: 14px;
		height: 2.5em;
		text-transform: uppercase;

		:hover {
			background: rgba(62, 107, 226, 0.9);
		}
	}
`;
