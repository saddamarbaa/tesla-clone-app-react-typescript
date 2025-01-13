import { Route, Routes, useLocation } from 'react-router'

import NotFoundScreen from './screens/NotFoundScreen'
import PrivateRoute from './components/PrivateRoute'

import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'

export default function RouteLayout() {
	const location = useLocation()

	return (
		<Routes key={location.pathname} location={location}>
			{/* Protected Routes */}
			<Route path="/" element={<PrivateRoute />}>
				<Route path="/" element={<HomeScreen />} />
			</Route>

			{/* Public Routes */}
			<Route path="/login" element={<LoginScreen />} />
			<Route path="/register" element={<SignUpScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	)
}
