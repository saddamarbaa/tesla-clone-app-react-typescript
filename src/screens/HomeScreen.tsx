import styled from 'styled-components'
import { memo } from 'react'

import Section from '../components/Section'

export const HomeScreen = () => {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-s.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model S Accessories"
				description=""
				backgroundImage="modals.avif"
				leftButtonText="Custom Order"
				rightButtonText="Shop Now"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-y.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y Accessories"
				description="Order Online for Touchless Delivery"
				backgroundImage="modaly.avif"
				leftButtonText="Custom Order"
				rightButtonText="Shop Now"
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
			<Section
				title="Model X"
				description="Model X Accessories"
				backgroundImage="modxx.avif"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
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
				title="Lifestyle"
				description=""
				backgroundImage="life.avif"
				leftButtonText="Shop Now"
				rightButtonText=""
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

export default memo(HomeScreen)

const Container = styled.div``
