import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPost from "./MainPost.jsx";
import Post from "./Post.jsx";
import AddPost from "./AddPost.jsx";
import EditPost from "./EditPost.jsx";

function HandleRout() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainPost />} />
					<Route path="/AddPost" element={<AddPost />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/edit/:id" element={<EditPost />} />
				</Routes>
			</Router>
		</>
	);
}

export default HandleRout;
