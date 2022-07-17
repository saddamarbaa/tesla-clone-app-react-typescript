import { memo } from 'react'
import styled from 'styled-components'
// @ts-ignore
import Fade from 'react-reveal/Fade'

export interface ISection {
	title: string
	description: string
	backgroundImage: string
	leftButtonText?: string
	rightButtonTex?: string
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
	return (
		<Wrapper backgroundImage={backgroundImage}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description} </p>
				</ItemText>
			</Fade>
			<ButtonWrapper>
				<Fade bottom>
					<ButtonsGroup>
						<LeftButton>{leftButtonText}</LeftButton>
						{rightButtonText && <RightButton>{rightButtonText}</RightButton>}
					</ButtonsGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</ButtonWrapper>
		</Wrapper>
	)
}

export default memo(Section)

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
	animation: animateDown infinite 1.5ms;
	overflow-x: hidden;
`
