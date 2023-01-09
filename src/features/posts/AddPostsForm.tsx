import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");

	const users = useSelector((state: any) => state.users);

	const onTitleChanged = (e: any) => setTitle(e.target.value);
	const onContentChanged = (e: any) => setContent(e.target.value);
	const onAuthorChanged = (e: any) => setUserId(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded({ id: nanoid(), title, content, userId }));
			setTitle("");
			setContent("");
		}
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

	const usersOptions = users.map((user: any) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" value={userId} onChange={onAuthorChanged}>
					<option value=""></option>
					{usersOptions}
				</select>
				<label htmlFor="postContent">Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChanged}
				/>
				<button type="button" onClick={onSavePostClicked} disabled={!canSave}>
					Save Post
				</button>
			</form>
		</section>
	);
};
export default AddPostForm;