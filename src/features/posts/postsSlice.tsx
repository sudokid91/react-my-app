import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

interface BasePost {
	id: string;
	title: string;
	content: string;
	date: string;
	reactions: any;
}

const initialState = [
	{
		id: "1",
		title: "Learning Redux Toolkit",
		content: "I've heard good things.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: "2",
		title: "Slices...",
		content: "The more I say slice, the more I want pizza.",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: (state, action) => {
			state.push(action.payload);
		},
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost: BasePost =
				state.find((post) => post.id === postId) || ({} as BasePost);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const selectAllPosts = (state: any) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
