import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/MainPost.css";
import CircularProgress from "@mui/material/CircularProgress";

function MainPost() {
	const [stateData, setStateData] = useState([]);
	const [selectedPost, setSelectedPost] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleDelete = (index) => {
		setSelectedPost(index);
	};

	const confirmDelete = () => {
		const postIdToDelete = stateData[selectedPost].id;

		axios
			.delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
			.then((response) => {
				if (response.status === 200) {
					const updatedStateData = [...stateData];
					updatedStateData.splice(selectedPost, 1);
					setStateData(updatedStateData);
				} else {
					console.error("Error deleting post. Status:", response.status);
				}
			})
			.catch((error) => {
				console.error("Error deleting post:", error);
			})
			.finally(() => {
				setSelectedPost(null);
			});
	};

	const cancelDelete = () => {
		setSelectedPost(null);
	};

	useEffect(() => {
		setTimeout(() => {
			axios
				.get("https://jsonplaceholder.typicode.com/posts")
				.then((response) => {
					setStateData(response.data.slice(0, 10));
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<section className="container mt-5">
				<div className="text-center mb-4">
					<h2 className="text-center mb-4">Posts</h2>
					<Link to="/AddPost" className="btn btn-success">
						Add Post
					</Link>
				</div>
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
						{stateData.map((item, index) => (
							<div key={index} className="row my-5">
								<div className="col">
									<div className="card h-100">
										<div className="card-body">
											<h5 className="card-title">Post {item.id}</h5>
											<p className="card-text">{item.title}</p>
											<p className="card-text">{item.body}</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<Link to={`/post/${item.id}`} className="btn btn-primary">
												Read more
											</Link>
											<div>
												<Link
													to={`/edit/${item.id}`}
													className="btn btn-primary me-2"
												>
													Edit Post
												</Link>
												<button
													className="btn btn-danger"
													onClick={() => handleDelete(index)}
												>
													Delete
												</button>
											</div>
										</div>
										{selectedPost === index && (
											<div className="confirmation-div">
												<p>Are you sure you want to delete this post?</p>
												<button
													className="btn btn-danger"
													onClick={confirmDelete}
												>
													Confirm
												</button>
												<button
													className="btn btn-secondary"
													onClick={cancelDelete}
												>
													Cancel
												</button>
												<Link to={`/${index}`}></Link>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</section>
		</>
	);
}

export default MainPost;
