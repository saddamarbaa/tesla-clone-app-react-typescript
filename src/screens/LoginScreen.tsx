import styled from 'styled-components'
import { auth, provider } from '../config/firebase'
import { useHistory } from 'react-router'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SignUpScreen from './SignUpScreen'
import { TAuth } from '../types'
import { LoginSchemaValidation } from '../utils'

const LoginScreen = () => {
	const [signIn, setSignIn] = useState(false)
	const history = useHistory()
	const emailReference = useRef<HTMLInputElement>(null)
	const passwordReference = useRef<HTMLInputElement>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TAuth>({
		resolver: yupResolver(LoginSchemaValidation),
	})

	useEffect(() => {
		const redirectToRegisterPage = () => {
			if (signIn) {
				return <SignUpScreen />
			}
		}
		redirectToRegisterPage()
	}, [signIn])

	if (signIn) {
		return <SignUpScreen />
	}
	const signInWithEmailAndPasswordHandler = (data: TAuth) => {
		console.log(JSON.stringify(data, null, 2))

		auth
			.signInWithEmailAndPassword(data.email, data.password)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				history.push('/')
			})
			.catch((error) => {
				// An error happened.
				const errorCode = error.code
				const errorMessage = error.message
				alert(errorMessage)
			})
	}

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (event: {
		preventDefault: () => void
	}) => {
		event.preventDefault()
		if (emailReference?.current && passwordReference?.current) {
			auth
				.createUserWithEmailAndPassword(
					emailReference.current.value,
					passwordReference.current.value,
				)
				.then((registeredUser) => {
					history.push('/')
					// Registered successful.
					// console.log(registeredUser);
				})
				.catch((error) => {
					// An error happened.
					const errorCode = error.code
					const errorMessage = error.message
					alert(errorMessage)
				})
		}
	}

	const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				history.push('/')
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			})
	}

	return (
		<LogInWrapper>
			<Container>
				<Title>Sign In</Title>
				<form
					autoComplete="off"
					onSubmit={handleSubmit(signInWithEmailAndPasswordHandler)}>
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
					<button type="submit" name="submit">
						Sign In
					</button>
				</form>
				<SignWthGoogleContainer>
					<img
						onClick={signInWithGoogleHandler}
						src="/images/google.png"
						alt="'Logo"
					/>
					<a onClick={signInWithGoogleHandler}>Login With Google</a>
				</SignWthGoogleContainer>

				<CreateAccountContainer onClick={() => setSignIn(() => true)}>
					<a onClick={registerUserWithEmailAndPasswordHandler}>
						Create an account
					</a>
				</CreateAccountContainer>
			</Container>
		</LogInWrapper>
	)
}

export default memo(LoginScreen)

const LogInWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: radial-gradient(transparent, hsl(0, 0%, 2%)),
		#333 url('/images/login-semi-interior.jpg') no-repeat center center/cover;
	color: #4a4a4a;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
`

const Container = styled.div`
	min-height: 336px;
	height: 400px;
	width: 414px;
	background: rgb(238, 238, 238);
	border-radius: 15px;
	padding: 20px;
	padding-bottom: 0;

	@media (max-width: 568px) {
		width: 90%;
	}

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
		height: 2.7em;
		text-transform: uppercase;
		font-weight: bold;

		:hover {
			background: rgba(62, 107, 226, 0.9);
		}
	}
`

const Title = styled.h1`
	color: #4a4a4a;
	font-weight: 200;
	font-size: 1.6rem;
	padding: 15px 0;
	padding-bottom: 13px;
	text-align: center;
	border-bottom: 1px solid rgba(123, 123, 123, 0.4);
`

const SignWthGoogleContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;

	a {
		cursor: pointer;
		font-size: 15px !important;
		display: inline-block;

		:hover {
			text-decoration: underline;
		}
	}

	img {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
`

const CreateAccountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	margin-top: 6px;
	min-height: 44px;

	a {
		transition: 0.4s;
		display: block;
		color: #3e6be2;
		cursor: pointer;
		font-size: 16px;

		:hover {
			text-decoration: underline;
		}
	}
`
