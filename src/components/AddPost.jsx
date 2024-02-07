import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./css/AddPost.css";

function AddPost({ setStateData }) {
	const [blog, setBlog] = useState({ id: "", userId: "", title: "", body: "" });
	const [loading, setLoading] = useState(false);
	const [titleError, setTitleError] = useState("");
	const [bodyError, setBodyError] = useState("");
	const [bodyError2, setBodyError2] = useState("");
	const [userIdError, setUserIdError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlog((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		setTitleError("");
		setUserIdError("");
		setBodyError("");
		setBodyError2("");

		let error = false;

		if (blog.title.length < 5) {
			setTitleError("Title must be at least 5 characters long.");
			error = true;
		}
		if (blog.body.length > 500) {
			setBodyError("Body text must not exceed 500 characters.");
			error = true;
		}
		if (blog.body.trim().length === 0) {
			setBodyError2("Body text must be entered.");
			error = true;
		}
		if (!/^\d+$/.test(blog.userId) || blog.userId <= 0) {
			setUserIdError("User ID must be a positive integer.");
			error = true;
		}

		if (error) {
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post(
				"https://jsonplaceholder.typicode.com/posts",
				blog
			);
			if (response.status === 201) {
				setTimeout(() => {
					console.log("Post added:", response.data);
					setLoading(false);
				}, 1000);
			}
		} catch (error) {
			console.error("Error:", error);
			setLoading(false);
		}
	};

	return (
		<>
			<div className="container main-container">
				<div className="con">
					<div className="container task-container">
						<h2 className="text-center">ADD POST</h2>
						<form onSubmit={handleSubmit} className="mt-4">
							<div className="mb-3">
								<input
									type="text"
									name="userId"
									value={blog.userId}
									onChange={handleChange}
									className="form-control"
									placeholder="Enter userId"
								/>
								{userIdError && (
									<div className="text-danger">{userIdError}</div>
								)}
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="title"
									value={blog.title}
									onChange={handleChange}
									className="form-control"
									placeholder="Enter title"
								/>
								{titleError && <div className="text-danger">{titleError}</div>}
							</div>
							<div className="mb-3">
								<textarea
									name="body"
									value={blog.body}
									onChange={handleChange}
									className="form-control"
									placeholder="Enter body"
								></textarea>
								{bodyError && <div className="text-danger">{bodyError}</div>}
								{bodyError2 && <div className="text-danger">{bodyError2}</div>}
							</div>
							<button type="submit" className="btn btn-primary">
								Add Post
							</button>
							<Link to="/" className="btn btn-primary ms-2">
								Back to Blog List
							</Link>
							{loading && (
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
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddPost;
