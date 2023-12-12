import { configureStore } from "@reduxjs/toolkit";

import favoriteMissionsReducer from "./slices/favorite-missions-slice";

const store = configureStore({
	reducer: {
		favoriteMissions: favoriteMissionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
