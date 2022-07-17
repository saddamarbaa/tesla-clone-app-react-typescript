import React from 'react'
import styled from 'styled-components'

function Footer() {
	return (
		<Container>
			<span>Tesla © 2022</span>
			<span>Privacy & Legal</span>
			<span>Vehicle Recalls</span>
			<span>Contact</span>
			<span>Careers News</span>
			<span>Engage Locations</span>
		</Container>
	)
}

export default Footer

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 1rem 2rem;
	text-align: center;

	@media (max-width: 568px) {
		display: block;
	}

	span {
		cursor: pointer;
		display: block;
		margin: 0.8rem;
		font-size: 0.8rem;

		:hover {
			text-decoration: underline;
		}
	}
`
