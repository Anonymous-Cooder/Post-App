import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const EditPost = () => {
	const [loading, setLoading] = useState(true);
	const [loading2, setLoading2] = useState(false);

	const { id } = useParams();

	const [post, setPost] = useState({
		id: "",
		title: "",
		body: "",
	});

	const [errors, setErrors] = useState({
		title: "",
		body: "",
		id: "",
	});

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((response) => {
					setPost(response.data);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				})
				.finally(() => {
					setLoading(false);
				});
		}, 1000);
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		console.log(errors);
		e.preventDefault();
		setLoading2(true);

		setErrors({ title: "", body: "", id: "" });
		let error = false;

		if (post.title.length < 5) {
			setErrors((prevErrors) => ({
				...prevErrors,
				title: "Title must be at least 5 characters long.",
			}));

			error = true;
		}

		if (post.body.length === 0 || post.body.length > 500) {
			setErrors((prevErrors) => ({
				...prevErrors,
				body: "Body must be between 1 and 500 characters long.",
			}));

			error = true;
		}

		if (
			isNaN(post.id) ||
			parseInt(post.id) <= 0 ||
			!Number.isInteger(parseFloat(post.id))
		) {
			setErrors((prevErrors) => ({
				...prevErrors,
				id: "User ID must be a positive integer.",
			}));

			error = true;
		}
		if (error) {
			setLoading2(false);
			return;
		}

		setTimeout(() => {
			axios
				.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
				.then((response) => {
					console.log("Post updated successfully:", response.data);
				})
				.catch((error) => {
					console.error("Error updating post:", error);
				});
			setLoading2(false);
		}, 1000);
	};

	return (
		<div className="container main-container">
			<div className="con">
				<div className="container task-container">
					<div className="edit-post">
						<h2 className="text-center">EDIT POST</h2>
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
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="id">userId:</label>
									<input
										type="text"
										id="id"
										name="id"
										value={post.id}
										onChange={handleChange}
										className="form-control"
									/>

									{errors.id && <div className="text-danger">{errors.id}</div>}
								</div>
								<div className="form-group">
									<label htmlFor="title">Title:</label>
									<input
										type="text"
										id="title"
										name="title"
										value={post.title}
										onChange={handleChange}
										className="form-control"
									/>

									{errors.title && (
										<div className="text-danger">{errors.title}</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="body">Body:</label>
									<textarea
										id="body"
										name="body"
										value={post.body}
										onChange={handleChange}
										className="form-control"
									></textarea>
									{errors.body && (
										<div className="text-danger">{errors.body}</div>
									)}
								</div>
								<div className="mt-3 d-flex justify-content-between">
									<div>
										<button type="submit" className="btn btn-primary me-2">
											Update Post
										</button>
										<Link to="/" className="btn btn-secondary">
											Cancel
										</Link>
									</div>
									{loading2 && (
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginTop: "20px",
											}}
										>
											<CircularProgress style={{ color: "blue" }} />
										</div>
									)}
									<Link to="/" className="btn btn-primary ms-2">
										Back to Blog List
									</Link>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPost;
