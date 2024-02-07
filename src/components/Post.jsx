import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./css/PostPage.css";

const PostPage = () => {
	let { id } = useParams();
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	setTimeout(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				setPost(response.data);
			})

			.catch((error) => {
				console.error("Error fetching data:", error);
				return <div className="post-not-found">Post not found</div>;
			})
			.finally(() => {
				setLoading(false);
			});
	}, 1000);

	return (
		<>
			<div className="post-page">
				{loading ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<CircularProgress
							style={{ color: "blue", height: 100, width: 100 }}
						/>
					</div>
				) : (
					<div>
						<h2>{post.id}</h2>
						<p className="post-title">{post.title}</p>
						<p className="post-content">{post.body}</p>
						<p>
							<Link to="/" className="btn btn-primary">
								Back to Blog List
							</Link>
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default PostPage;
