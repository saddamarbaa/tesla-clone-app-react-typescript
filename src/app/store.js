/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import carReducer from "./features/car/carSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		car: carReducer,
		user: userReducer,
	},
});
