import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { data } from "./Data.js";
import axios from "axios";
import "./PostPage.css";

const PostPage = () => {
	let { id } = useParams();

	const [post, setPost] = useState([]);

	axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => {
			setPost(response.data);
		})

		.catch((error) => {
			console.error("Error fetching data:", error);
			return <div className="post-not-found">Post not found</div>;
		});

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
