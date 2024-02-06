import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPost.css";

function MainPost() {
	const [stateData, setStateData] = useState([]);
	const [selectedPost, setSelectedPost] = useState(null);

	const handleDelete = (index) => {
		setSelectedPost(index);
	};

	const confirmDelete = () => {
		const updatedStateData = [...stateData];
		updatedStateData.splice(selectedPost, 1);
		setStateData(updatedStateData);
		setSelectedPost(null);
	};

	const cancelDelete = () => {
		setSelectedPost(null);
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => {
				setStateData(data.slice(0, 10));
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<>
			<section className="container mt-5">
				<h2 className="text-center mb-4">Posts</h2>
				{stateData.map((item, index) => (
					<div key={index} className="row my-5">
						<div className="col">
							<div className="card h-100">
								<div className="card-body">
									<h5 className="card-title">Post {item.id}</h5>
									<p className="card-text">{item.title}</p>
									<p className="card-text">{item.body}</p>
								</div>
								<div className="card-footer d-flex justify-content-end">
									<Link
										to={`/post/${item.id}`}
										className="btn btn-primary me-2"
									>
										Read more
									</Link>
									<button
										className="btn btn-danger"
										onClick={() => handleDelete(index)}
									>
										Delete
									</button>
								</div>
								{selectedPost === index && (
									<div className="confirmation-div">
										<p>Are you sure you want to delete this post?</p>
										<button className="btn btn-danger" onClick={confirmDelete}>
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
			</section>
		</>
	);
}

export default MainPost;
