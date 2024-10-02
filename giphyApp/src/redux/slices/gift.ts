import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGift } from "../../types/gift";

interface IInitalState {
	gift: IGift[];
}

// Define the initial state using that type
const initialState: IInitalState = {
	gift: [],
};

const giftSlice = createSlice({
	name: "giftState",
	initialState,
	reducers: {
		setGifts: (state, action: PayloadAction<IGift[]>) => {
			state.gift = action.payload;
		},
		resetGifts: (state) => {
			state.gift = [];
		},
	},
});

export const { setGifts, resetGifts } = giftSlice.actions;
export default giftSlice;
