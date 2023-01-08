import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state: CounterState) => {
			state.count += 1;
		},
		decrement: (state: CounterState) => {
			state.count -= 1;
		},
		reset: (state: CounterState) => {
			state.count = 0;
		},
		incrementByNum: (state: CounterState, action) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, reset, incrementByNum } =
	counterSlice.actions;

export default counterSlice.reducer;
