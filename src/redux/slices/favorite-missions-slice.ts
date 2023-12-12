import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteMissions {
	ids: string[];
}

const initialState: FavoriteMissions = {
	ids: [],
};

const favoriteMissionsSlice = createSlice({
	name: "favoriteMissions",
	initialState,
	reducers: {
		addMission: (state, action: PayloadAction<string>) => {
			state.ids = [...state.ids, action.payload];
		},
		removeMission: (state, action: PayloadAction<string>) => {
			state.ids = state.ids.filter((id) => id !== action.payload);
		},
	},
});

export const { addMission, removeMission } = favoriteMissionsSlice.actions;
export default favoriteMissionsSlice.reducer;
