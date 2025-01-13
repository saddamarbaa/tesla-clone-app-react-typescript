import styled from 'styled-components'
import { memo } from 'react'

import Section from './Section'
import VideoSection from './VedioSection'

export const HomePageComponent = () => {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-s.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<VideoSection id="QHvpAtvurQE" />
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-y.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-3.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-x.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>

			<VideoSection id="JhA9-JYLFyo" />

			<Section
				title="Model 3"
				description="$299/mo Leasing From $29,9903"
				backgroundImage="model3.avif"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="$299/mo Leasing"
				backgroundImage="model-y..avif"
				leftButtonText="Order Model 3"
				rightButtonText="Order Model Y"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImage="solar-panel.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>

			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
				backgroundImage="solar-roof.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Accessories"
				description=" "
				backgroundImage="accessories.jpg"
				leftButtonText="Shop Now"
				rightButtonText=""
			/>
		</Container>
	)
}

export default memo(HomePageComponent)

const Container = styled.div``
