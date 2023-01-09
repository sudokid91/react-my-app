import { useSelector } from "react-redux";

const PostAuthor = (props: any) => {
	const { userId } = props;
	const users = useSelector((state: any) => state.users);

	const author = users.find((user: any) => user.id === userId);

	return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
