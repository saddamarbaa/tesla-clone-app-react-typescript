import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export interface ISection {
	title: string
	description: string
	backgroundImage: string
	leftButtonText?: string
	rightButtonText?: string
}

interface StyleProps {
	backgroundImage: string
}

const Section = ({
	title,
	description,
	backgroundImage,
	leftButtonText,
	rightButtonText,
}: ISection) => {
	const [inView, setInView] = useState(false)

	// Set up Intersection Observer to detect when the component is visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true)
					} else {
						setInView(false)
					}
				})
			},
			{ threshold: 0.3 }, // Trigger when 30% of the section is in view
		)

		const section = document.getElementById(title) // Get element by title ID
		if (section) observer.observe(section)

		return () => {
			if (section) observer.unobserve(section)
		}
	}, [title])

	const fadeIn = useSpring({
		from: { opacity: 0, transform: 'translateY(50px)' },
		to: {
			opacity: inView ? 1 : 0,
			transform: inView ? 'translateY(0px)' : 'translateY(50px)',
		},
		reset: inView, // Reset animation when component comes into view
		delay: 200,
	})

	return (
		<Wrapper id={title} backgroundImage={backgroundImage}>
			<animated.div style={fadeIn}>
				<ItemText>
					<h1>{title}</h1>
					<p>{description} </p>
				</ItemText>
			</animated.div>
			<ButtonWrapper>
				<animated.div style={fadeIn}>
					<ButtonsGroup>
						<LeftButton>{leftButtonText}</LeftButton>
						{rightButtonText && <RightButton>{rightButtonText}</RightButton>}
					</ButtonsGroup>
				</animated.div>
				<DownArrow src="/images/down-arrow.svg" />
			</ButtonWrapper>
		</Wrapper>
	)
}

export default Section

const Wrapper = styled.div<StyleProps>`
	width: 100vw;
	min-height: 100vh;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	background: ${(props) => `url("/images/${props.backgroundImage}")`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonWrapper = styled.div`
	text-align: center;
`

const ButtonsGroup = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 30px;
`

const LeftButton = styled.div`
	background: rgba(13, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 13px;
	cursor: pointer;
	margin: 10px;
`

const RightButton = styled(LeftButton)`
	color: black;
	opacity: 0.7;
	background: white;
`

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`
