import styled from 'styled-components'

const FallbackID = 'QHvpAtvurQE'

const VideoSection = ({ id = FallbackID }: { id: string }) => {
	return (
		<Container>
			<StyledIframe
				src={`https://www.youtube.com/embed/${id}}?autoplay=1&mute=1&loop=1&playlist=${id}`}
				title="YouTube video player"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></StyledIframe>
		</Container>
	)
}

export default VideoSection

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
	/* overflow: hidden; */
`

const StyledIframe = styled.iframe`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	border: none;
`
