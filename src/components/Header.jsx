import React from "react";

function Header() {
	return (
		<>
			<header className="m-0 p-0 ">
				<div className="container-fluid px-5">
					<div className="row">
						<nav className="navbar navbar-expand-lg ">
							<a className="navbar-brand" href="...">
								<i className="fa-brands fa-free-code-camp"></i>
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="...navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<a className="nav-link active" aria-current="page" href="/">
											Home
											<i className="fa-solid fa-briefcase ps-1"></i>
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link active"
											aria-current="page"
											href="..."
										>
											Work
											<i className="fa-solid fa-briefcase ps-1"></i>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="...">
											Services
											<i className="fa-solid fa-car-battery ps-1"></i>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="...">
											About
											<i className="fa-solid fa-heart ps-1"></i>
										</a>
									</li>
								</ul>
								<form className="d-flex" role="search">
									<button className="btn btn-outline-success" type="submit">
										Planner
										<i className="fa-solid fa-leaf ps-1"></i>
									</button>
								</form>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
