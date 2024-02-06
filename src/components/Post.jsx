import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./Data.js";

import "./PostPage.css";

const PostPage = () => {
	const { id } = useParams();
	const post = data.find((post) => post.id === parseInt(id));

	if (!post) {
		return <div className="post-not-found">Post not found</div>;
	}

	return (
		<div className="post-page">
			<h2>{post.id}</h2>
			<p className="post-title">{post.title}</p>
			<p className="post-content">{post.body}</p>
			<p>
				<Link to="/" className="btn btn-primary">
					Back to Blog List
				</Link>
			</p>
		</div>
	);
};

export default PostPage;
