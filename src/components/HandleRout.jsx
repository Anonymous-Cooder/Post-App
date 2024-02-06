import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPost from "./MainPost.jsx";
import Post from "./Post.jsx";
function HandleRout() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainPost />} />
					<Route path="/post/:id" element={<Post />} />
				</Routes>
			</Router>
		</>
	);
}

export default HandleRout;
