import { createSlice } from "@reduxjs/toolkit";

interface BaseUser {
	id: string;
	name: string;
}

const initialState: Array<BaseUser> = [
	{
		id: "0",
		name: "HoangNN",
	},
	{
		id: "1",
		name: "HoangNN1",
	},
	{
		id: "2",
		name: "HoangNN2",
	},
];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const selectAllUsers = (state: any) => state.users;

export default usersSlice.reducer;
