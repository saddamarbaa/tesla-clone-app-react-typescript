import styled from 'styled-components'
import RouteLayout from './Routes'

function App() {
	return (
		<AppWrapper>
			<RouteLayout />
		</AppWrapper>
	)
}

export default App

const AppWrapper = styled.div`
	display: 'flex';
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
`
