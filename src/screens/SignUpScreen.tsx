import styled from 'styled-components'
import { useHistory } from 'react-router'
import React, { memo, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { auth } from '../config/firebase'
import { UserType } from '../types'
import { signupSchemaValidation } from '../utils'
import LogInScreen from './LoginScreen'

const SignUpScreen = () => {
	const [logIn, setLogIn] = useState<boolean>(false)
	const history = useHistory()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserType>({
		resolver: yupResolver(signupSchemaValidation),
	})

	useEffect(() => {
		const redirectTologInPage = () => {
			if (logIn) {
				return <LogInScreen />
			}
		}

		redirectTologInPage()
	}, [logIn])

	if (logIn) {
		return <LogInScreen />
	}

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (data: UserType) => {
		auth
			.createUserWithEmailAndPassword(data.email, data.password)
			.then((registeredUser) => {
				history.push('/login')
				// Registered successful.
				// console.log(registeredUser);
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				const errorMessage = error.message
				alert(errorMessage)
			})
	}

	return (
		<LogInWrapper>
			<Container>
				<Confirmation onClick={() => setLogIn(true)}>
					<span>Already have an account? &nbsp;</span>
					<a> Sign In</a>
				</Confirmation>
				<Title>Create Account</Title>

				<FormWrapper>
					<form
						autoComplete="off"
						onSubmit={handleSubmit(registerUserWithEmailAndPasswordHandler)}>
						<div className="control">
							<label
								className={errors.firstName ? 'error' : ''}
								htmlFor="firstName">
								{errors.firstName ? errors.firstName?.message : ''}
							</label>
							<input
								type="text"
								id="firstName"
								autoComplete="email"
								placeholder={errors.firstName ? '' : 'First Name'}
								{...register('firstName')}
								className={` ${
									errors.firstName ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>

						<div className="control">
							<label
								className={errors.lastName ? 'error' : ''}
								htmlFor="Last Name">
								{errors.lastName ? errors.lastName?.message : ''}
							</label>
							<input
								type="text"
								id="lastName"
								autoComplete="lastName"
								placeholder={errors.lastName ? '' : 'Last Name'}
								{...register('lastName')}
								className={` ${
									errors.lastName ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>
						<div className="control">
							<label className={errors.email ? 'error' : ''} htmlFor="email">
								{errors.email ? errors.email?.message : ''}
							</label>
							<input
								type="email"
								id="email"
								autoComplete="email"
								placeholder={errors.email ? '' : 'Email'}
								{...register('email')}
								className={` ${
									errors.email ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>

						<div className="control">
							<label
								className={errors.password ? 'error' : ''}
								htmlFor="password">
								{errors.password ? errors.password?.message : ''}
							</label>
							<input
								type="password"
								autoComplete="new-password"
								placeholder={errors.password ? '' : 'Password'}
								{...register('password')}
								className={` ${
									errors.password ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>

						<div className="control">
							<label
								className={errors.confirmPassword ? 'error' : ''}
								htmlFor="ceconfirmPassword">
								{errors.confirmPassword ? errors.confirmPassword?.message : ''}
							</label>
							<input
								type="password"
								autoComplete="new-password"
								placeholder={
									errors.confirmPassword ? '' : 'Type your password again'
								}
								{...register('confirmPassword')}
								className={` ${
									errors.confirmPassword ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>

						<button
							className="button create-button"
							type="submit"
							name="submit"
							id="submit-form">
							Create Account
						</button>
					</form>
				</FormWrapper>
			</Container>
		</LogInWrapper>
	)
}

export default memo(SignUpScreen)

const LogInWrapper = styled.div`
	background: radial-gradient(transparent, hsl(0, 0%, 2%)),
		#333 url('/images/login-semi-hangar.jpg') no-repeat center center/cover;
	width: 100vw;
	min-height: 100vh;
	font-size: 1rem;
	color: #4a4a4a;
`

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
`

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
`

const Title = styled.h2`
	color: #4a4a4a;
	font-weight: 200;
	font-size: 1.6rem;
	padding: 15px 0;
	padding-bottom: 13px;
	text-align: center;
	border-bottom: 1px solid rgba(123, 123, 123, 0.4);
`

const FormWrapper = styled.div`
	padding: 0 10%;
	display: flex;
	justify-content: center;
	form {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin-top: 15px;
	}

	button {
		transition: 0.4s;
		border: none;
		border-radius: 80px !important;
		cursor: pointer;
		background: #3e6be2;
		color: #f3d9f0;
		border-radius: 3px;
		box-shadow: none;
		font-size: 0.9rem;
		font-weight: bold;
		height: 2.7em;
		text-transform: uppercase;

		:hover {
			background: rgba(62, 107, 226, 0.9);
		}
	}
`
